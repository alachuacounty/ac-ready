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

export default function Sandbags({ headCells, rows, updateMapCenter }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('label');

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
                      <TableCell align='center'>{row.label}</TableCell>
                      <TableCell align='center'>{row.address}</TableCell>
                      <TableCell align='center'>
                        {row.Limitations ? row.Limitations : '-none-'}
                      </TableCell>
                      <TableCell align='center'>
                        {row.Details ? row.Details : '---'}
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
