import {useEffect, useRef, useState} from "react";

export const useContentHeight = (open: boolean) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (contentRef.current) {
            if ("scrollHeight" in contentRef.current) {
                setHeight(`${contentRef.current.scrollHeight}px`);
            }
        }
    }, [open]);

    return {contentRef, height};
};