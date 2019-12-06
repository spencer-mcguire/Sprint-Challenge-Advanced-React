import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = key => {
  const [dark, setDark] = useLocalStorage(key);

  useEffect(() => {
    dark
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [dark]);
  return [dark, setDark];
};
