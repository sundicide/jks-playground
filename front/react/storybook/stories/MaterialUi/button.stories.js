import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Icon, TextField } from '@material-ui/core';
import { CloudUpload, Delete, KeyboardVoice, Save } from '@material-ui/icons';

export default {
  title: 'MaterialUi/Button',
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const ContainedButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
      </Button>
        <Button variant="contained" color="secondary">
          Secondary
      </Button>
        <Button variant="contained" disabled>
          Disabled
      </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
      </Button>
    </div>
  );
}

export const DisableElevation = () => (
  <Button variant="contained" color="primary" disableElevation>
    Disable elevation
  </Button>
)

export const DisableByCondition = () => {
  const [value, setValue] = React.useState(0);
  function getRemains() {
    if (value < 0) {
      return { disabled: true};
    }
    return {};
  }
  return (
    <div style={{display: "grid", gridAutoFlow: "row", rowGap: "10px", width: "200px"}}>
      <TextField
        type="number"
        value={value} onChange={(event) => setValue(event.target.value)} />
      <Button
        variant="contained"
        color="primary"
        {...getRemains()}
      >
        Disable elevation
      </Button>
    </div>
  );
}

export const TextButtons = () => {
  const classes = useStyles();

  return(
    <div className = { classes.root } >
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons" color="primary">
        Link
      </Button>
    </div >
  );
}

export const ButtonsWithIconsAndLabel = () => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<Delete />}
      >
        Delete
      </Button>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUpload />}
      >
        Upload
      </Button>
      <Button
        variant="contained"
        disabled
        color="secondary"
        className={classes.button}
        startIcon={<KeyboardVoice />}
      >
        Talk
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<Save />}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<Save />}
      >
        Save
      </Button>
    </div>
  );
}
