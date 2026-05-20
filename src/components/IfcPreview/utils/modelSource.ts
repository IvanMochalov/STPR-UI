import { revokeBlobUrlIfNeeded } from "./file-hellper";

export const trimModelUrl = (url?: string): string | undefined => {
  const trimmed = url?.trim();

  return trimmed || undefined;
};

export const getUrlFileName = (url?: string): string | undefined =>
  trimModelUrl(url)?.split("/").filter(Boolean).pop();

export const getCardCaption = (
  file: File | null,
  url: string | undefined,
  emptyTitle: string,
): string => file?.name ?? getUrlFileName(url) ?? emptyTitle;

export const resolveViewerUrl = (
  readonly: boolean,
  file: File | null,
  url: string | undefined,
  ownedBlobUrlRef: { current: string | null },
): string | null => {
  if (!readonly && file) {
    revokeBlobUrlIfNeeded(ownedBlobUrlRef.current);
    const objectUrl = URL.createObjectURL(file);

    ownedBlobUrlRef.current = objectUrl;

    return objectUrl;
  }

  const trimmedUrl = trimModelUrl(url);

  if (trimmedUrl) {
    revokeBlobUrlIfNeeded(ownedBlobUrlRef.current);
    ownedBlobUrlRef.current = null;

    return trimmedUrl;
  }

  return null;
};

export const fetchKnownModelByteSize = async (
  readonly: boolean,
  file: File | null,
  url: string | undefined,
): Promise<number | null> => {
  if (!readonly && file) {
    return file.size;
  }

  const trimmedUrl = trimModelUrl(url);

  if (!trimmedUrl) {
    return null;
  }

  try {
    const headResponse = await fetch(trimmedUrl, { method: "HEAD" });

    if (!headResponse.ok) {
      return null;
    }

    const contentLength = headResponse.headers.get("content-length");

    if (!contentLength) {
      return null;
    }

    const parsed = Number.parseInt(contentLength, 10);

    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  } catch {
    return null;
  }
};
