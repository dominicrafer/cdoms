"use client";
import type { HTMLAttributes } from "react";
import useSpotlightEffect from "../../hooks/useSpotlightEffect";

// Define an interface for the spotlight configuration
interface SpotlightConfig {
  radius?: number;
  brightness?: number;
  color?: string;
  smoothing?: number;
}

// Combine props with potential HTML canvas attributes
interface SpotlightCursorProps extends HTMLAttributes<HTMLCanvasElement> {
  config?: SpotlightConfig;
}

const SpotlightCursor = ({
  config = {},
  className,
  ...rest
}: SpotlightCursorProps) => {
  const canvasRef = useSpotlightEffect();

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] w-full h-full ${className}`}
      {...rest}
    />
  );
};

export default SpotlightCursor;
