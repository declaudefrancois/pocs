import React, { ComponentProps, PropsWithChildren, useMemo } from "react";
import TabProvider from "./TabProvider";
import TabContent from "./TabContent";
import TabHeader from "./TabHeader";
import TabItem from "./TabItem";
import * as ReactIs from "react-is";
import { useTabContext } from "./useTabContext.hook";

export function isTabItem(child: React.ReactNode) {
  return ReactIs.isElement(child) && child.type === TabItem;
}

export function isTabHeader(child: React.ReactNode) {
  return ReactIs.isElement(child) && child.type === TabHeader;
}

export function isTabContent(
  child: React.ReactNode
): child is React.ReactElement<typeof TabContent> {
  return ReactIs.isElement(child) && child.type === TabContent;
}

function Tab({
  children,
  defaultKey = 0,
  ...props
}: PropsWithChildren<{ defaultKey?: number }> & ComponentProps<"div">) {
  return (
    <TabProvider defaultKey={defaultKey}>
      <TabContent_ {...props}>{children}</TabContent_>
    </TabProvider>
  );
}

function TabContent_({
  children,
  ...props
}: PropsWithChildren & ComponentProps<"div">) {
  if (
    !Array.isArray(children) ||
    !children.every((value) => isTabItem(value))
  ) {
    throw new Error("Tab children shoud all be Tab.Item");
  }

  const { headers, contents } = useMemo(
    () =>
      children.reduce(
        (acc, child) => {
          const header = child.props.children.find(isTabHeader);
          const content = child.props.children.find(isTabContent);

          acc.headers.push(
            React.cloneElement(header, { tabKey: child.props.tabKey })
          );
          acc.contents.push(
            React.cloneElement(content, { tabKey: child.props.tabKey })
          );
          return acc;
        },
        { headers: [], contents: [] }
      ),
    [children]
  );

  const { activeTab, setActiveTab } = useTabContext();

  return (
    <div {...props}>
      <ul className="flex gap-4">
        {headers.map((header: string, index: number) => (
          <li
            key={index}
            className={`p-3 rounded-full shadow cursor-pointer ${
              activeTab === index
                ? "bg-blue-500 text-white font-medium"
                : "bg-white"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {header}
          </li>
        ))}
      </ul>

      {contents
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((content: any) => activeTab === content.props.tabKey)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((content: any, index: number) => (
          <div key={index}>{content}</div>
        ))}
    </div>
  );
}

Tab.Content = TabContent;
Tab.Header = TabHeader;
Tab.Item = TabItem;

export default Tab;
