import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  statusGreen: {
    background: theme.palette.green.main,
  },
  statusRed: {
    background: theme.palette.red.main,
  },
  spanStyles: {
    color: theme.palette.white.main,
    display: 'block',
    fontWeight: 'bold',
    textTransform: 'Uppercase',
  },
}));

export default function Roads({ headCells, data }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead sx={{ background: '#EFEFEF' }}>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                sx={{ textAlign: { xs: 'left', lg: 'center' } }}
                padding='normal'
              >
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 'bold',
                    color: (theme) => theme.palette.middleblue.main,
                  }}
                >
                  {headCell.label}
                </Typography>
              </TableCell>
            ))}

            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((road) => (
            <TableRow
              key={road.RoadName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                sx={{ textAlign: { xs: 'left', lg: 'center' } }}
                component='th'
                scope='row'
              >
                {road.RoadName}
              </TableCell>
              <TableCell align='center'>
                <span
                  className={clsx(
                    classes.spanStyles,
                    road.Status === 'Closed'
                      ? classes.statusRed
                      : classes.statusGreen
                  )}
                >
                  {road.Status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
