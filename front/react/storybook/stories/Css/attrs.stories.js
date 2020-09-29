import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { renderMarkdown } from "../../utils/markdown";

export default {
  title: 'Css/Attrs',
};

export const BorderShape = () => {
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

export const BoxSizing = () => {
  const classes = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
    item: {
      marginRight: 100,
      '& div': {
        width: 160,
        height: 80,
        padding: 20,
        border: '8px solid red',
        background: 'yellow',
      },
      '& .content-box': { 
        boxSizing: 'content-box',
      },
      '& .border-box': { 
        boxSizing: 'border-box',
      },
      '& p': {
        whiteSpace: 'pre-line',
      },
    },
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
    <div className={classes.root}>
      <div className={classes.item}>
        <p>
          {`  
            Total width: 160px + (2 * 20px) + (2 * 8px) = 216px
            Total height: 80px + (2 * 20px) + (2 * 8px) = 136px
            Content box width: 160px
            Content box height: 80px
          `}
        </p>
        <div class="content-box">Content box</div>
      </div>
      <div className={classes.item}>
        <p>
          {`  
            Total width: 160px
            Total height: 80px
            Content box width: 160px - (2 * 20px) - (2 * 8px) = 104px
            Content box height: 80px - (2 * 20px) - (2 * 8px) = 24px
          `}
        </p>
        <div class="border-box">Border box</div>
      </div>
    </div>
  )
}
