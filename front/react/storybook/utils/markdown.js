import React from 'react';
import hljs from "highlight.js";
import { Remarkable } from "remarkable";
import "../github-markdown.css";

const md = new Remarkable("full", {
  html: true,
  breaks: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) { }
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (__) { }

    return ""; // use external default escaping
  }
});

export const renderMarkdown = text => {
  const markdown = md.render(text);
  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
  );
};