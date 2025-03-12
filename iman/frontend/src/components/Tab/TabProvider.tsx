import { createContext, PropsWithChildren, useState } from "react";

export interface TabProviderState {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

export const TabContext = createContext<TabProviderState | undefined>(
  undefined
);

export default function TabProvider({
  children,
  defaultKey = 0,
}: PropsWithChildren<{
  defaultKey?: number;
}>) {
  const [activeTab, setActiveTab] = useState<number>(defaultKey);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}
