import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { visuallyHidden } from '@mui/utils';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function Shelters({ headCells, rows, updateMapCenter }) {
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('ShelterName');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Box sx={{ width: '100%', my: 3 }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }}>
            <TableHead sx={{ background: '#EFEFEF' }}>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={'center'}
                    padding={'normal'}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={() => handleRequestSort(headCell.id)}
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
                      {orderBy === headCell.id ? (
                        <Box component='span' sx={visuallyHidden}>
                          {order === 'desc'
                            ? 'sorted descending'
                            : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length &&
                rows
                  .slice()
                  .sort(getComparator(order, orderBy))
                  .map((row, index) => (
                    <TableRow hover key={index}>
                      <TableCell component='th' id={row.dataid} scope='row'>
                        <Button
                          variant='outlined'
                          onClick={() =>
                            updateMapCenter(
                              row.latitude,
                              row.longitude,
                              row.dataid
                            )
                          }
                        >
                          Show on Map
                        </Button>
                      </TableCell>
                      <TableCell align='center'>{row.ShelterName}</TableCell>
                      <TableCell align='center'>{row.Location}</TableCell>
                      <TableCell align='center'>
                        <span
                          className={clsx(
                            classes.spanStyles,
                            row.Status === 'Full'
                              ? classes.statusRed
                              : classes.statusGreen
                          )}
                        >
                          {row.Status}
                        </span>
                      </TableCell>
                      <TableCell align='center'>
                        {row.ShelterType === 'Pet Friendly' ? 'Yes' : 'No'}
                      </TableCell>
                      <TableCell align='center'>
                        {row.ShelterType === 'SpNS' ? 'Yes' : 'No'}
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
