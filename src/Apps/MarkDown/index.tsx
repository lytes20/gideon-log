import { useState } from "react";
import { INITIAL_PLACEHOLDER } from "./data";
import "./styles.css";

function MarkDown() {
  const [markdownText, setMarkdownText] = useState(INITIAL_PLACEHOLDER);

  const handleTextChange = (e) => {
    setMarkdownText(e.target.value);
  };
  return (
    <div className="markdown-container">
      <div className="markdown-header">
        <h1>Markdown Playground</h1>
      </div>

      <div className="markdown-main border">
        <div className="w-[50%]">
          <textarea
            className="w-full h-full"
            placeholder="Enter your markdow"
            value={markdownText}
            onChange={handleTextChange}
          />
        </div>
        <div className="w-[50%]"></div>
      </div>
      <div></div>
    </div>
  );
}

export default MarkDown;
