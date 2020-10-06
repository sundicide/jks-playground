import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { renderMarkdown } from "../../utils/markdown";
import '../../global.css'

export default {
  title: 'Css/Flex',
};

const Title = ({children}) => (
  <Typography variant='h4'>{children}</Typography>
)

export const Direction = () => {
  const classes = makeStyles(theme => ({
    container: {
      display: 'flex',
    },
    containerDirectionColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
    divItem: {
      alignItems: 'center',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      height: 50,
      margin: 10,
      width: 50,
    },
  }))()
  return (
    <div>
      <div>
        <Title>Direction - default(row)</Title>
        <div className={classes.container}>
          <div className={classes.divItem}>1</div>
          <div className={classes.divItem}>2</div>
          <div className={classes.divItem}>3</div>
          <div className={classes.divItem}>4</div>
        </div>
      </div>
      <div>
        <Title>Direction - column</Title>
        <div className={classes.containerDirectionColumn}>
          <div className={classes.divItem}>1</div>
          <div className={classes.divItem}>2</div>
          <div className={classes.divItem}>3</div>
          <div className={classes.divItem}>4</div>
        </div>
      </div>
    </div>
  )
}

export const Flex = () => {
  const classes = makeStyles(theme => ({
    container: {
      border: '1px solid black',
      display: 'flex',
      height: 100,
      padding: 10,
      width: 100,
    },
    divItem: {
      alignItems: 'center',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      height: 50,
      margin: 10,
      width: 50,
    },
    root: {
      '& .center': {
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: 300,
      },
      '& .container': {
        border: '1px solid black',
        height: 50,
        padding: 10,
        width: 300,
      },
      '& .div-item': {
        alignItems: 'center',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        margin: 10,
      },
      '& .flex1': {
        flex: 1,
      },
      '& .flex2': {
        flex: 2,
      },
      '& .grow1': {
        flexGrow: 1,
      },
      '& .overflow': {
        flexShrink: 0,
        width: 500,
      },
    },
  }))()

  const flexMdContents = `
  \`flex: 1;\` 은 아래와 동일한 의미이다.

  \`\`\`css
  flex-grow: 1; // 공간이 남을 시 자동으로 넓힌다.
  flex-shrink: 1; // 공간이 부족할 시 자동으로 좁힌다.
  flex-basis: 0; // container를 기준으로 사이즈가 결정된다.
  \`\`\`
  `

  return (
    <div className={classes.root}>
      <div className='flex flex-dir-row'>
        <div className='m5'>
          <Title>default</Title>
          <div className='container flex'>
            <div className='div-item'>1</div>
            <div className='div-item'>2</div>
            <div className='div-item'>3</div>
            <div className='div-item'>4</div>
          </div>
        </div>
        <div className='m5'>
          <Title>flex: 1</Title>
          <div className='container flex'>
            <div className='div-item flex1'>1</div>
            <div className='div-item flex1'>1</div>
            <div className='div-item flex1'>1</div>
            <div className='div-item flex1'>1</div>
          </div>
        </div>
        <div className='m5'>
          <Title>flex: 1 & 2</Title>
          <div className='container flex'>
            <div className='div-item flex1'>1</div>
            <div className='div-item flex2'>2</div>
            <div className='div-item flex1'>1</div>
            <div className='div-item flex1'>1</div>
          </div>
        </div>
      </div>
      {renderMarkdown(flexMdContents)}

      <div className='flex flex-dir-row'>
        <div className='m5 container flex'>
          <div className='div-item'>normal</div>
        </div>
        <div className='m5 container flex'>
          <div className='div-item grow1'>flex-grow: 1</div>
        </div>
        <div className='m5 container flex'>
          <div className='div-item overflow'>flex-shink: 0</div>
          <div className='div-item'>normal</div>
          <div className='div-item'>normal</div>
        </div>
      </div>
    </div>
  )
}