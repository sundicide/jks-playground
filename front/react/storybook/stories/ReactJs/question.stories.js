import React from 'react';
import { Paper } from '@material-ui/core';

import { renderMarkdown } from "../../utils/markdown";
import mdFile from "./question.md";

export default {
  title: 'ReactJs/Questions',
};

export const useRef = () => {
  return (
    <div>
      <Paper>
        {renderMarkdown(mdFile)}
      </Paper>
    </div>
  )
}
