import React from 'react';
import Paper from '@material-ui/core/Paper';
import EnhancedTable from '../Table';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

const classes = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
}));

function linkFormatter(cell, row) {
  return (
    <a href={row.link} target='_blank'>
      {cell}
    </a>
  );
}

class AdvisoryTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      advisoriesData: [],
      columns: [
        {
          dataField: 'id',
          text: 'ID',
          align: 'center',
          headerAlign: 'center',
          headerStyle: {
            backgroundColor: '#EFEFEF',
            outline: 'none !important',
          },
          sort: true,
          hidden: true,
        },
        {
          dataField: 'name',
          text: 'Emergency Order',
          align: 'center',
          headerAlign: 'center',
          headerStyle: {
            backgroundColor: '#EFEFEF',
            outline: 'none !important',
          },
          sort: true,
          style: { cursor: 'pointer', fontWeight: 'bold', padding: '16px' },
          formatter: linkFormatter,
        },
        {
          dataField: 'dateandtime',
          text: 'Date',
          align: 'center',
          headerAlign: 'center',
          headerStyle: {
            backgroundColor: '#EFEFEF',
            outline: 'none !important',
          },
          sort: true,
          style: { padding: '16px' },
        },
        {
          dataField: 'link',
          text: 'Advisory Link',
          align: 'center',
          headerAlign: 'center',
          headerStyle: {
            backgroundColor: '#EFEFEF',
            outline: 'none !important',
          },
          sort: true,
          hidden: true,
        },
      ],
    };
  }

  componentDidMount() {
    let advisoiresJsonData = [];

    fetch(
      'https://api.alachuacounty.us/hurricane-next-api/api/getEmergecnyOrdersRecentAdvisories'
    )
      .then((res) =>
        res
          .json()
          .then((data) => {
            data[0].forEach((advisory, i) => {
              let advisoryData = {};
              advisoryData['id'] = i;
              advisoryData['name'] = advisory.OrderName;
              advisoryData['dateandtime'] = moment(advisory.OrderDateTime)
                .utc()
                .format('YYYY-MM-DD');
              advisoryData['link'] = advisory.Link;
              advisoiresJsonData.push(advisoryData);
            });
          })
          .then(() => {
            this.setState({ advisoriesData: advisoiresJsonData });
          })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Paper className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}></Grid>
          <Grid item xl={12} md={12} sm={12} xs={12}>
            <EnhancedTable
              rowData={this.state.advisoriesData}
              dataColumns={this.state.columns}
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default AdvisoryTable;
