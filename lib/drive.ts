/**
 * Accepts either a raw Google Drive file ID or a full Drive sharing URL
 * (e.g. https://drive.google.com/file/d/<id>/view?usp=sharing, or a
 * ?id=<id> style link) and returns the bare file ID.
 */
export function resolveDriveFileId(input: string): string {
  const trimmed = input.trim();

  if (!trimmed.includes("drive.google.com") && !trimmed.includes("/")) {
    // Already looks like a bare file ID.
    return trimmed;
  }

  const pathMatch = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (pathMatch) return pathMatch[1];

  try {
    const url = new URL(trimmed);
    const idParam = url.searchParams.get("id");
    if (idParam) return idParam;
  } catch {
    // Not a valid URL — fall through and return the input as-is.
  }

  return trimmed;
}

export function driveViewUrl(idOrUrl: string): string {
  return `https://drive.google.com/file/d/${resolveDriveFileId(idOrUrl)}/view`;
}

export function drivePreviewUrl(idOrUrl: string): string {
  return `https://drive.google.com/file/d/${resolveDriveFileId(idOrUrl)}/preview`;
}
