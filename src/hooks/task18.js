import { useEffect } from "react";

export function useTimeout(callback, delay) {
  useEffect(() => {
    if (delay === null) return;

    const timer = setTimeout(callback, delay);
    return () => clearTimeout(timer);
  }, [callback, delay]);
}
