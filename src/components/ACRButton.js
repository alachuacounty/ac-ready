import React from 'react';
import { Button, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '10',
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'bold',
  },
  textSmall: {
    fontSize: '0.8125rem',
  },
  jumbo: {
    padding: '15px 30px',
    width: '100%',
  },
  mediumButton: {
    padding: '10px 25px',
    width: '100%',
  },
  darkBG: {
    backgroundColor: theme.palette.darkblue.light,
    borderColor: theme.palette.middleblue.main,
    color: theme.palette.white.main,
    '&:hover': { backgroundColor: theme.palette.darkblue.lightest },
  },
  lightBG: {
    color: theme.palette.darkblue.main,
    backgroundColor: theme.palette.lightblue.light,
    borderColor: theme.palette.middleblue.light,
    '&:hover': { backgroundColor: theme.palette.yellow.main },
  },
}));

export default function ACRButton({ text, link, invert, size, onClick }) {
  const classes = useStyles();

  const appliedClasses = clsx(
    classes.button,
    invert ? classes.lightBG : classes.darkBG,
    size === 'jumbo' ? classes.jumbo : ''
  );
  return (
    <Button
      className={appliedClasses}
      variant='contained'
      size={size}
      onClick={onClick}
    >
      <Link href={link} color='inherit' title={text}>
        <Typography
          className={clsx(
            classes.text,
            size === 'small' ? classes.textSmall : ''
          )}
        >
          {text}
        </Typography>
      </Link>
    </Button>
  );
}
