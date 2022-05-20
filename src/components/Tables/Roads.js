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

export default function Roads({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead sx={{ background: '#EFEFEF' }}>
          <TableRow>
            <TableCell align='center'>
              <Typography
                variant='body1'
                sx={{
                  fontWeight: 'bold',
                  color: (theme) => theme.palette.middleblue.main,
                }}
              >
                Road Name
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((road) => (
            <TableRow
              key={road.RoadName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center' component='th' scope='row'>
                {road.RoadName}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
