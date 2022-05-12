import React from 'react';
import { Button, Link } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  darkBG: {
    bgcolor: '#1B5B98!important',
    borderColor: ' #1968B2!important',
    borderRadius: '10',
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
  lightBG: {
    color: '#12274B!important',
    bgcolor: '#D0EDFC!important',
    borderColor: ' #4A97D2!important',
    borderRadius: '10',
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
}));

export default function ACRButton({ text, link, invert, size }) {
  return (
    <div>
      <Button sx={{}} variant='contained' size={size}>
        <Link href={link} color='inherit' title={text}>
          {text}
        </Link>
      </Button>
    </div>
  );
}
