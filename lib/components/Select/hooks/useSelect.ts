import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { useClickOutside } from "../../../../src/hooks/useClickOutside.ts";
import { SELECT_DROPDOWN_GAP } from "../constants";
import { TOnBlurSelect, TOnChangeSelect, TSelectListStyle, TSelectOption } from "../types";

export type TUseSelectParams = {
  options: TSelectOption[];
  value?: string | null | number;
  name: string;
  disabled?: boolean;
  isSearchable?: boolean;
  onChange?: TOnChangeSelect;
  onBlur?: TOnBlurSelect;
};

export type TUseSelectReturn = {
  isOpen: boolean;
  searchQuery: string;
  listStyle: TSelectListStyle;
  refControl: React.RefObject<HTMLDivElement>;
  refListWrapper: React.RefObject<HTMLDivElement>;
  searchInputRef: React.RefObject<HTMLInputElement>;
  selectedOption: TSelectOption | undefined;
  filteredOptions: TSelectOption[];
  listWrapperStyle: React.CSSProperties;
  handleSelect: TOnChangeSelect;
  handleToggle: () => void;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick: (event: React.MouseEvent) => void;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export function useSelect(params: TUseSelectParams): TUseSelectReturn {
  const { options, value, name, disabled = false, isSearchable = false, onChange, onBlur } = params;

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [listStyle, setListStyle] = useState<TSelectListStyle>(null);

  const refControl = useRef<HTMLDivElement>(null);
  const refListWrapper = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const updateListPosition = useCallback(() => {
    if (!refControl.current || !refListWrapper.current) return;
    const triggerRect = refControl.current.getBoundingClientRect();
    const listRect = refListWrapper.current.getBoundingClientRect();
    const gap = SELECT_DROPDOWN_GAP;
    const fitsBelow = triggerRect.bottom + listRect.height + gap <= window.innerHeight;
    const fitsAbove = triggerRect.top - listRect.height - gap >= 0;
    let top: number;
    let placement: "top" | "bottom";
    if (!fitsBelow && fitsAbove) {
      placement = "top";
      top = triggerRect.top - listRect.height - gap;
    } else {
      placement = "bottom";
      top = triggerRect.bottom + gap;
    }
    setListStyle({
      top,
      left: triggerRect.left,
      width: triggerRect.width,
      placement,
    });
  }, []);

  useLayoutEffect(() => {
    if (!isOpen) {
      setListStyle(null);
      return;
    }
    updateListPosition();
  }, [isOpen, updateListPosition]);

  useEffect(() => {
    if (!isOpen) return;
    const rafId = requestAnimationFrame(() => updateListPosition());
    const onUpdate = () => updateListPosition();
    window.addEventListener("resize", onUpdate);
    window.addEventListener("scroll", onUpdate, true);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onUpdate);
      window.removeEventListener("scroll", onUpdate, true);
    };
  }, [isOpen, updateListPosition]);

  useEffect(() => {
    if (!isOpen || listStyle?.placement !== "top") return;
    updateListPosition();
  }, [isOpen, searchQuery, listStyle?.placement, updateListPosition]);

  useClickOutside([refControl, refListWrapper], () => setIsOpen(false), isOpen);

  useEffect(() => {
    if (isOpen && isSearchable && searchInputRef.current) {
      const id = setTimeout(() => searchInputRef.current?.focus(), 0);
      return () => clearTimeout(id);
    }
  }, [isOpen, isSearchable]);

  useEffect(() => {
    if (!isOpen) setSearchQuery("");
  }, [isOpen]);

  const selectedOption = options.find((option) => option.value === value);
  const filteredOptions =
    isSearchable && searchQuery
      ? options.filter((option) => option.label.toLowerCase().includes(searchQuery.toLowerCase()))
      : options;

  const handleBlur: TOnBlurSelect = useCallback((data) => onBlur?.(data), [onBlur]);

  const handleSelect: TOnChangeSelect = useCallback(
    (event, data) => {
      onChange?.(event, { value: data.value, name });
      setIsOpen(false);
      setSearchQuery("");
      handleBlur({ value: data.value, name });
    },
    [onChange, name, handleBlur],
  );

  const handleToggle = useCallback(() => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
    setSearchQuery("");
  }, [disabled]);

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }, []);

  const handleSearchClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  const listWrapperStyle: React.CSSProperties = {
    position: "fixed",
    zIndex: 1000,
    ...(listStyle
      ? { top: listStyle.top, left: listStyle.left, width: listStyle.width }
      : { top: -9999, left: 0, width: 100, visibility: "hidden" }),
  };

  return {
    isOpen,
    searchQuery,
    listStyle,
    refControl,
    refListWrapper,
    searchInputRef,
    selectedOption,
    filteredOptions,
    listWrapperStyle,
    handleSelect,
    handleToggle,
    handleSearchChange,
    handleSearchClick,
    setSearchQuery,
  };
}
