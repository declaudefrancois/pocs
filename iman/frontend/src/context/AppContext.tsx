import { createContext } from "react";

export interface AppState {}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContext;
