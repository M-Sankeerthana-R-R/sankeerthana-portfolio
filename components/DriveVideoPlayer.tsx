"use client";

import { useState } from "react";
import { Play, ExternalLink, AlertTriangle } from "lucide-react";
import { drivePreviewUrl, driveViewUrl } from "@/lib/drive";

export default function DriveVideoPlayer({
  driveFileId,
  label,
  caption,
}: {
  /** A raw Google Drive file ID, or a full Drive sharing URL — either works. */
  driveFileId: string;
  label: string;
  caption?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [slowToLoad, setSlowToLoad] = useState(false);

  const previewSrc = drivePreviewUrl(driveFileId);
  const openSrc = driveViewUrl(driveFileId);

  function handlePlay() {
    setLoaded(true);
    // The iframe can't reliably report a permissions/X-Frame-Options
    // failure via onError — browsers just render Google's own error
    // page inside the frame. As a best-effort signal, surface the
    // "open directly" fallback more prominently if the frame hasn't
    // finished loading after a few seconds.
    window.setTimeout(() => setSlowToLoad(true), 6000);
  }

  return (
    <div className="rounded-lg border border-[var(--color-border)] overflow-hidden bg-[var(--color-surface)]">
      <div className="relative aspect-video w-full">
        {!loaded ? (
          <button
            type="button"
            onClick={handlePlay}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-3 w-full h-full bg-[var(--color-surface-raised)] hover:bg-[var(--color-surface)] transition-colors"
            aria-label={`Play demo: ${label}`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] group-hover:bg-[var(--color-accent-bright)] transition-colors">
              <Play size={22} className="text-white ml-0.5" fill="currentColor" aria-hidden="true" />
            </span>
            <span className="text-sm text-[var(--color-muted)] px-6 text-center">
              {label}
            </span>
          </button>
        ) : (
          <iframe
            key={previewSrc}
            src={previewSrc}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title={label}
            onLoad={() => setSlowToLoad(false)}
          />
        )}
      </div>

      <div className="px-4 py-3 flex items-start justify-between gap-3 border-t border-[var(--color-border)]">
        <p className="text-xs text-[var(--color-faint)] leading-relaxed">
          {caption ?? label}
        </p>
        <a
          href={openSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] text-[var(--color-faint)] hover:text-[var(--color-accent-bright)] transition-colors shrink-0 mt-0.5"
        >
          Open <ExternalLink size={12} aria-hidden="true" />
        </a>
      </div>

      {loaded && slowToLoad && (
        <div className="px-4 pb-3 flex items-start gap-2 text-[11px] text-[var(--color-faint)]">
          <AlertTriangle size={13} className="shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Taking a while to load (large file, or your network/browser may be
            blocking embedded Drive content). If it doesn&apos;t appear, use
            the &quot;Open&quot; link above to watch it directly.
          </span>
        </div>
      )}
    </div>
  );
}
