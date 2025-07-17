import { useState } from "react";
const DEFAULT_FALLBACK_IMAGE = "placeholder.jpg";
type ImageProps = {
  src?: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
};

const Image = ({
  src = "placeholder.jpg",
  alt,
  className = "w-auto h-auto object-cover",
  fallbackSrc = DEFAULT_FALLBACK_IMAGE,
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src ?? fallbackSrc);
  return (
    <img
      src={`${import.meta.env.BASE_URL + imgSrc}`}
      alt={alt}
      loading="lazy"
      onError={() => setImgSrc(fallbackSrc)}
      className={className}
    />
  );
};

export default Image;
