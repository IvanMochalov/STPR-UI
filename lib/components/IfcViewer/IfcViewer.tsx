import cx from "clsx";
import React, { useEffect, useRef, useState } from "react";

import { Spinner } from "../Spinner";
import { Text } from "../Text";
import styles from "./IfcViewer.module.scss";
import type { IIfcViewerProps } from "./types";
import { fetchIfcFromUrl } from "./utils/fetchIfc";
import { formatMeshProgressText } from "./utils/formatMeshProgress";

const DEFAULT_WASM_PUBLIC_PATH = "/components-assets/IfcPreview/web-ifc/";

export const IfcViewer: React.FC<IIfcViewerProps> = (props) => {
  const {
    url,
    wasmPublicPath = DEFAULT_WASM_PUBLIC_PATH,
    onError,
    onModelLoaded,
    classNameRoot: propsClassNameRoot,
  } = props;

  const hostRef = useRef<HTMLDivElement>(null);
  const effectGenRef = useRef(0);
  const onErrorRef = useRef(onError);
  const onModelLoadedRef = useRef(onModelLoaded);

  const [loadingText, setLoadingText] = useState("Загрузка модели");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  onErrorRef.current = onError;
  onModelLoadedRef.current = onModelLoaded;

  useEffect(() => {
    const el = hostRef.current;

    if (!el) {
      return;
    }

    const gen = ++effectGenRef.current;
    let disposed = false;
    let disposeHandle: (() => void) | undefined;

    setIsLoading(true);
    setErrorMessage(null);
    setLoadingText("Загрузка модели");

    const isStale = () => disposed || effectGenRef.current !== gen;

    const clearHost = () => {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    };

    (async () => {
      try {
        setLoadingText("Загрузка модели");
        const data = await fetchIfcFromUrl(url);

        if (isStale()) {
          return;
        }

        setLoadingText("Инициализация просмотра");
        const { createIfcWebViewer } = await import("./utils/ifcWebViewer");

        if (isStale()) {
          return;
        }

        setLoadingText("Открытие модели");

        const handle = await createIfcWebViewer(el, data, wasmPublicPath, {
          isCancelled: isStale,
          onMeshProgress: (loaded, total) => {
            if (isStale()) {
              return;
            }

            setLoadingText(formatMeshProgressText(loaded, total));
          },
        });

        if (isStale()) {
          handle.dispose();

          return;
        }

        disposeHandle = handle.dispose;
        setIsLoading(false);
        onModelLoadedRef.current?.();
      } catch (unknownError) {
        if (isStale()) {
          return;
        }

        const error =
          unknownError instanceof Error ? unknownError : new Error(String(unknownError));

        if (error.message === "IFC_VIEWER_CANCELLED") {
          return;
        }

        setIsLoading(false);
        setErrorMessage(error.message);
        onErrorRef.current?.(error);
      }
    })();

    return () => {
      disposed = true;
      disposeHandle?.();
      clearHost();
    };
  }, [url, wasmPublicPath]);

  const classNameRoot = cx(styles.ifcViewer, propsClassNameRoot);

  return (
    <div className={classNameRoot}>
      <div className={styles.viewerHost} ref={hostRef} />

      {isLoading && !errorMessage && (
        <div className={styles.viewerSpinner}>
          <Spinner loadingText={loadingText} size={"xl"} />
        </div>
      )}

      {errorMessage && (
        <div className={styles.viewerErrorBanner}>
          <Text type={"p2"}>{errorMessage}</Text>
        </div>
      )}
    </div>
  );
};
