export type IIfcViewerProps = {
  /** URL IFC-модели (HTTP(S) или blob:). */
  url: string;
  /**
   * Базовый URL каталога со статикой `web-ifc.wasm`.
   * @default "/components-assets/IfcPreview/web-ifc/"
   */
  wasmPublicPath?: string;
  onError?: (error: Error) => void;
  onModelLoaded?: () => void;
  classNameRoot?: string;
};
