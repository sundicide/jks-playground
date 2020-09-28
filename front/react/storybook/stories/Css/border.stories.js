import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { renderMarkdown } from "../../utils/markdown";

export default {
  title: 'Css/Border',
};

export const Shape = () => {
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
      <ul>
        <li>
          <div className={classes.shape1}>
            shape1
          </div>
        </li>
        <li>
          <div className={classes.shape2}>
            shape2
          </div>
        </li>
      </ul>
    </div>
  )
}
