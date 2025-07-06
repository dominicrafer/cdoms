import { useState } from "react";
const DEFAULT_FALLBACK_IMAGE = "/public/fallback.jpg";
type ImageProps = {
  src?: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
};

const Image = ({
  src,
  alt,
  className = "w-autoh-auto object-cover",
  fallbackSrc = DEFAULT_FALLBACK_IMAGE, // You can replace this with your own placeholder path
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src ?? fallbackSrc);
  console.log(imgSrc);
  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onError={() => setImgSrc(fallbackSrc)}
      className={className}
    />
  );
};

export default Image;
