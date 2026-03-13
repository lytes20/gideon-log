import { useState } from 'react';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
import { INITIAL_PLACEHOLDER } from './data';
import './styles.css';

function MarkDown() {
  const [markdownText, setMarkdownText] = useState(INITIAL_PLACEHOLDER);

  const handleTextChange = (e) => {
    setMarkdownText(e.target.value);
  };
  return (
    <div className="markdown-container p-4">
      <div className="markdown-header">
        <h1>Markdown Playground</h1>
      </div>

      <div className="markdown-main gap-4">
        <div className="w-[50%] border border-gray-500 rounded-lg tablet">
          <div>Input</div>
          <textarea className="w-full" placeholder="Enter your markdow" value={markdownText} onChange={handleTextChange} />
        </div>
        <div className="w-[50%] border border-gray-500 rounded-lg tablet">
          <div>Preview</div>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(marked(markdownText)) }} />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default MarkDown;
