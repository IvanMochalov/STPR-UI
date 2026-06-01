export type SpinnerSize = "sm" | "md" | "lg" | "xl";

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: string;
  classNameRoot?: string;
  /** Текст под спиннером; в конце отображаются четыре точки с волновой анимацией */
  loadingText?: string;
  classNameSpinnerTextLine?: string;
}
