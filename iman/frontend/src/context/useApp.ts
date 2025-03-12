import { useContext } from "react";
import AppContext, { AppState } from "./AppContext";

export function useAppState() {
  const context = useContext<AppState | null>(AppContext);
  if (!context) {
    throw new Error("useApp must be used within a AppProvider");
  }

  return context;
}
