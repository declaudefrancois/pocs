import { PropsWithChildren } from "react";
import { isTabContent, isTabHeader } from ".";

export default function TabItem({
  children,
}: PropsWithChildren<{
  tabKey: number;
}>) {
  if (
    !Array.isArray(children) ||
    children.length !== 2 ||
    !children.every((value) => isTabHeader(value) || isTabContent(value))
  ) {
    throw new Error(
      "Tab.Item should have exactly 2 children (Tab.Header & Tab.Content)"
    );
  }

  return <div>{children}</div>;
}
