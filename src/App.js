import React, { useEffect, useState } from "react";
import fs from "fs";

import './index.less'

const App = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    const fileContent = fs.readFileSync(
      './test/content.txt',
      "utf-8"
    );
    setContent(fileContent);
  }, []);

  return <div className="app">你用Electron的特性读取到了文件内容: <span className="content">{content}</span></div>;
};

export default App;
