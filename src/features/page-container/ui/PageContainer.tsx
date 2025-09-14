import { Splitter } from "antd";
import type { PageProps } from "../model";

const PageContainer = ({ rightPanel, leftPanel }: PageProps) => {
  return (
    <Splitter
      
      // gutterStyle={() => ({ width: "8px", background: "#ddd" })}
      style={{
        height: "calc(100vh - 61px)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Splitter.Panel defaultSize="40%" min="40%" max="60%">
        {leftPanel}
      </Splitter.Panel>
      <Splitter.Panel>{rightPanel}</Splitter.Panel>
    </Splitter>
  );
};

export default PageContainer;
