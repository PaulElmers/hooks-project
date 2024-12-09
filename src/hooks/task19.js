import { useState, useEffect } from "react";

export function useImageLoader(src) {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const img = new Image();
    img.src = src;

    const handleLoad = () => setStatus("loaded");
    const handleError = () => setStatus("error");

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [src]);

  return status;
}
