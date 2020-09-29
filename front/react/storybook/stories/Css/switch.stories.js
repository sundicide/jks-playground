import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { renderMarkdown } from "../../utils/markdown";

export default {
  title: 'Css/Switch',
};

// https://medium.com/better-programming/from-static-to-dynamic-css-values-23b2d258f60d
export const DynamicCssValueSwitch = () => {
  require('./switch.css')
  const classes = makeStyles(theme => ({
    'shape1': {
      borderBottom: '20px solid green',
      borderLeft: '20px solid transparent',
      width: 200
    },
    'shape2': {
      borderBottom: '20px solid green',
      borderLeft: '20px solid transparent',
      borderRight: '20px solid transparent',
      width: 200
    },
  }))()
  return (
    <div>
      <h3>https://medium.com/better-programming/from-static-to-dynamic-css-values-23b2d258f60d</h3>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  )
}
