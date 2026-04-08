import { useEffect } from "react";
import { useObservableState } from "../../hooks/useObservableState";
import { getCurrentTheme, initTheme, setTheme, theme$, toggleTheme } from "./store";

export function useTheme() {
  const theme = useObservableState(theme$, getCurrentTheme());

  useEffect(() => {
    initTheme();
  }, []);

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}
