import React from 'react';

const MarkdownView = ({ isVisible = false }) => {
  let classList = 'output-markdown-window hide';
  if (isVisible) classList = 'output-markdown-window';

  return (
    <section className={classList}>
      <article className="markdown-text-container">
        <h2 className="title">Markdown Text Result</h2>
      </article>
    </section>
  );
};

export default MarkdownView;
