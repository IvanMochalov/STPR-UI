export interface IIfcViewerCanvasProps {
  data: Uint8Array;
  wasmPublicPath: string;
  onPhaseTextChange?: (text: string) => void;
  onError?: (error: Error) => void;
  onModelLoaded?: () => void;
}
