import { useEffect } from "react";

export function useEventListener(eventType, handler, element = window) {
  useEffect(() => {
    if (!element) return;

    element.addEventListener(eventType, handler);
    return () => element.removeEventListener(eventType, handler);
  }, [eventType, handler, element]);
}
