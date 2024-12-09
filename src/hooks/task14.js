import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage"; // використовується попередній хук

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}
