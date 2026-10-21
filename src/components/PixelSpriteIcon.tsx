import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { resolveAssetUrl } from '../utils/magazineLogic.ts';

interface PixelSpriteProps {
  hairColor: string;
  outfitColor: string;
  accentColor: string;
  size?: number;
  animated?: boolean;
  label?: string;
}

/**
 * Renders an 8-bit pixel-art student sprite inspired by the Danganronpa 2
 * e-Handbook and Jabberwock Island map walking sprites.
 */
export const PixelSpriteIcon: React.FC<PixelSpriteProps> = ({
  hairColor,
  outfitColor,
  accentColor,
  size = 36,
  animated = true,
  label
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={animated ? 'animate-sprite-bob shrink-0' : 'shrink-0'}
      aria-label={label || '8-bit角色像素图标'}
      role="img"
    >
      {/* Hair top & ahoge */}
      <rect x="7" y="0" width="2" height="1" fill={hairColor} />
      <rect x="5" y="1" width="6" height="2" fill={hairColor} />
      <rect x="4" y="3" width="8" height="2" fill={hairColor} />
      {/* Face */}
      <rect x="4" y="5" width="1" height="3" fill={hairColor} />
      <rect x="5" y="5" width="6" height="3" fill="#FDE6D2" />
      <rect x="11" y="5" width="1" height="3" fill={hairColor} />
      {/* Eyes */}
      <rect x="6" y="6" width="1" height="1" fill="#18181B" />
      <rect x="9" y="6" width="1" height="1" fill="#18181B" />
      {/* Torso / Uniform */}
      <rect x="5" y="8" width="6" height="4" fill={outfitColor} />
      {/* Tie / Collar accent */}
      <rect x="7" y="8" width="2" height="3" fill={accentColor} />
      {/* Arms */}
      <rect x="3" y="8" width="2" height="3" fill={outfitColor} />
      <rect x="11" y="8" width="2" height="3" fill={outfitColor} />
      <rect x="3" y="11" width="1" height="1" fill="#FDE6D2" />
      <rect x="12" y="11" width="1" height="1" fill="#FDE6D2" />
      {/* Legs / Shoes */}
      <rect x="5" y="12" width="2" height="3" fill="#27272A" />
      <rect x="9" y="12" width="2" height="3" fill="#27272A" />
      <rect x="4" y="15" width="3" height="1" fill={accentColor} />
      <rect x="9" y="15" width="3" height="1" fill={accentColor} />
    </svg>
  );
};

interface OfficialMediaFrameProps {
  src: string;
  alt: string;
  caption?: string;
  aspectClass?: string;
  objectPosition?: string;
  onInspect?: (src: string, caption: string) => void;
  figureNumber?: string;
}

/**
 * Resilient official CG / character artwork frame with magazine crop marks
 * and zero-broken-image fallback.
 */
export const OfficialMediaFrame: React.FC<OfficialMediaFrameProps> = ({
  src,
  alt,
  caption,
  aspectClass = 'aspect-video',
  objectPosition = 'object-center',
  onInspect,
  figureNumber
}) => {
  const [failed, setFailed] = useState(false);
  const resolvedSrc = resolveAssetUrl(src);

  return (
    <figure className="group relative flex flex-col">
      <div
        className={`relative w-full overflow-hidden border border-stone-900/20 bg-stone-900 ${aspectClass}`}
      >
        {!failed ? (
          <img
            src={resolvedSrc}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
            className={`h-full w-full object-cover ${objectPosition} transition-transform duration-200 group-hover:scale-[1.02]`}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-pink-950 p-6 text-center text-stone-200">
            <span className="font-editorial-mono text-xs tracking-widest text-pink-400">
              OFFICIAL ARCHIVE PLATE
            </span>
            <p className="mt-2 font-editorial-serif text-base font-bold">{alt}</p>
          </div>
        )}

        {/* Subtle editorial corner registration ticks */}
        <div className="pointer-events-none absolute inset-0 border border-white/15" />

        {figureNumber && (
          <div className="pointer-events-none absolute bottom-2 left-2 bg-stone-950/85 px-2 py-0.5 font-editorial-mono text-[11px] font-semibold tracking-wider text-stone-100">
            {figureNumber}
          </div>
        )}

        {onInspect && (
          <button
            type="button"
            onClick={() => onInspect(src, caption || alt)}
            aria-label={`放大检视原图：${alt}`}
            className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-stone-950/85 px-2.5 py-1 text-xs font-medium text-white opacity-90 transition-opacity hover:bg-[#FF007F] group-hover:opacity-100 whitespace-nowrap shrink-0"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span>原图检视</span>
          </button>
        )}
      </div>

      {caption && (
        <figcaption className="mt-1.5 font-editorial-serif text-xs italic leading-relaxed text-stone-600">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
