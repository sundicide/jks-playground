import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export default {
  title: 'MaterialUi/Typography',
};

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const COLORS = {
  INITIAL: 'initial', // default
  INHERIT: 'inherit',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TEXT_PRIMARY: 'textPrimary',
  TEXT_SECONDARY: 'textSecondary',
  ERROR: 'error',
}

export const Default = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <Typography variant="caption">
        variant = caption
      </Typography>
      <Typography color={COLORS.PRIMARY}>
        color = PRIMARY
      </Typography>
      <Typography color={COLORS.SECONDARY}>
        color = secondary
      </Typography>
      <Typography color={COLORS.TEXT_PRIMARY}>
        color = textPrimary
      </Typography>
      <Typography color={COLORS.TEXT_SECONDARY}>
        color = textSecondary
      </Typography>
      <Typography color={COLORS.ERROR}>
        color = error
      </Typography>
    </>
  );
}
