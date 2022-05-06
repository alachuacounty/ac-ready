import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: '50%',
  },
});

function createData(houseSize, limitation) {
  return { houseSize, limitation };
}

const rows = [
  createData('1', '$58,680'),
  createData('2', '$67,080'),
  createData('3', '$75,480'),
  createData('4', '$83,760'),
  createData('5', '$90,480'),
  createData('6', '$97,200'),
  createData('7', '$103,920'),
  createData('8+', '$110,640'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Household size</TableCell>
            <TableCell align="right">Income Limitation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.houseSize}>
              <TableCell component="th" scope="row">
                {row.houseSize}
              </TableCell>
              <TableCell align="right">{row.limitation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
