import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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