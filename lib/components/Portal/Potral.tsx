import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { PortalProps } from "./types";

export const Portal: React.FC<PortalProps> = ({ children, node, classNameRoot }) => {
  const [container, setContainer] = useState<Element | DocumentFragment | null>(null);

  useEffect(() => {
    // Если node передан извне, используем его
    if (node) {
      setContainer(node);
      return;
    }

    // Иначе создаём свой контейнер
    const newContainer = document.createElement("div");
    if (classNameRoot) {
      newContainer.className = classNameRoot;
    }
    document.body.appendChild(newContainer);
    setContainer(newContainer);

    return () => {
      if (!node) {
        document.body.removeChild(newContainer);
      }
    };
  }, [node, classNameRoot]);

  if (!container) return null;

  return ReactDOM.createPortal(children, container);
};
