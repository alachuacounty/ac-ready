import React from 'react';
import { Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  darkBG: {
    backgroundColor: '#1B5B98!important',
    borderColor: ' #1968B2!important',
    borderRadius: '10',
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
  lightBG: {
    color: '#12274B!important',
    backgroundColor: '#D0EDFC!important',
    borderColor: ' #4A97D2!important',
    borderRadius: '10',
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
}));

export default function ACRButton({ text, link, invert, size }) {

  const classes = useStyles();
  return (
    <div>
      <Button className={invert ? classes.lightBG : classes.darkBG} variant='contained' size={size}>
        <Link href={link} color='inherit' title={text}>
          {text}
        </Link>
      </Button>
    </div>
  );
}
