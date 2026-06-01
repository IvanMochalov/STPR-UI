export const hasModelUrl = (url: string | undefined): boolean => Boolean(url?.trim());

export const revokeBlobUrlIfNeeded = (objectUrl: string | null) => {
  if (objectUrl?.startsWith("blob:")) {
    URL.revokeObjectURL(objectUrl);
  }
};
