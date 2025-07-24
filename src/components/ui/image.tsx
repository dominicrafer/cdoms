import clsx from "clsx";
import { useState, useEffect } from "react";

const DEFAULT_FALLBACK_IMAGE = "placeholder.jpg";

type ImageProps = {
  src?: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  aspect?: string; // e.g., "aspect-[4/3]"
  loadingType?: "eager" | "lazy";
};

const Image = ({
  src = "placeholder.jpg",
  alt,
  className = "",
  fallbackSrc = DEFAULT_FALLBACK_IMAGE,
  aspect = "aspect-[1/1]",
  loadingType = "lazy",
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src ?? fallbackSrc);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  useEffect(() => {
    setIsImgLoaded(false);
  }, [src]);

  return (
    <div className={`relative w-full ${aspect} ${className}`}>
      {!isImgLoaded && (
        <div
          className={clsx(
            "absolute inset-0 bg-gray-500 animate-pulse w-full h-full rounded-md",
            className
          )}
        />
      )}
      <img
        src={`${import.meta.env.BASE_URL + imgSrc}`}
        alt={alt}
        loading={loadingType}
        onLoad={() => setIsImgLoaded(true)}
        onError={() => setImgSrc(fallbackSrc)}
        className={clsx(
          `transition-opacity duration-300 w-full h-full object-cover `,
          {
            "opacity-100": isImgLoaded,
            "opacity-0": !isImgLoaded,
          },
          className
        )}
      />
    </div>
  );
};

export default Image;
