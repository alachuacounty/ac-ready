import React, { useEffect } from 'react';
import Map from '../../components/Map/index';
//import EnhancedTable from "../../components/Sandbags/table";
import EnhancedTable from '../../components/Table/index';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
//import Geocode from 'react-geocode';
import { selectFilter } from 'react-bootstrap-table2-filter';

import SandbagsTable from './sandbagtable';

//Geocode.setApiKey('AIzaSyBRbdKmyFU_X9r-UVmsapYMcKDJQJmQpAg');

const classes = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
}));

let statusFilter;
let openClicked = false;
let closeClicked = false;

const selectStatusOptions = { Open: 'Open', Closed: 'Closed' };

const handleOpenClick = () => {
  if (openClicked == false) {
    statusFilter('Open');
    openClicked = true;
  } else {
    statusFilter('');
    openClicked = false;
  }
};

const handleCloseClick = () => {
  if (closeClicked == false) {
    statusFilter('Closed');
    closeClicked = true;
  } else {
    statusFilter('');
    closeClicked = false;
  }
};

class SandbagsMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sandbagsData: [],
      sandBagTableData: [],
      mapSandBagData: [],
      defaultSandBagsDataSortBy: 'name',
      selectedSandBagLocation: null,
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
          dataField: 'status',
          text: 'Status',
          align: 'center',
          headerAlign: 'center',
          headerStyle: {
            backgroundColor: '#EFEFEF',
            outline: 'none !important',
          },
          sort: true,
          formatter: (cell) => selectStatusOptions[cell],
          filter: selectFilter({
            options: selectStatusOptions,
            style: { width: '100%', overflow: 'hidden' },
            getFilter: (filter) => {
              statusFilter = filter;
            },
          }),
        },
        {
          dataField: 'name',
          text: 'Name',
          align: 'center',
          headerAlign: 'center',
          headerStyle: {
            backgroundColor: '#EFEFEF',
            outline: 'none !important',
          },
          sort: true,
          style: { cursor: 'pointer', fontWeight: 'bold' },
          events: {
            onClick: (e, column, columnIndex, row, rowIndex) => {
              this.setState({ selectedSandBagLocation: row.id });
              //myArray.find((x) => x.id === row.id).foo;
            },
          },
        },
        {
          dataField: 'address',
          text: 'Address',
          align: 'center',
          headerAlign: 'center',
          headerStyle: {
            backgroundColor: '#EFEFEF',
            outline: 'none !important',
          },
          sort: true,
        },
        {
          dataField: 'limitations',
          text: 'Limitations',
          align: 'center',
          headerAlign: 'center',
          headerStyle: {
            backgroundColor: '#EFEFEF',
            outline: 'none !important',
          },
          sort: true,
        },
        {
          dataField: 'details',
          text: 'Details',
          align: 'center',
          headerAlign: 'center',
          headerStyle: {
            backgroundColor: '#EFEFEF',
            outline: 'none !important',
          },
          sort: true,
        },
      ],
    };
  }

  componentDidMount() {
    //let mapAddress = [];
    //let tableDatas = [];
    fetch('https://api.alachuacounty.us/hurricaneportal/api/getSandBagsData')
      .then((res) =>
        res.json().then((data) => {
          this.setState({ sandbagsData: data[0] });
          data[0].forEach((locationAddress, index) => {
            let tableData = {};
            let address = {};
            let pos = {};
            tableData['id'] = index;
            tableData['status'] = locationAddress.SandbagStatus;
            tableData['name'] = locationAddress.SandbagName;
            tableData['address'] = locationAddress.SandbagLocation;
            tableData['limitations'] = locationAddress.SandbagLimitations;
            tableData['details'] = locationAddress.SandbagDetails;
            this.setState({
              sandBagTableData: this.state.sandBagTableData.concat(tableData),
            });
            //tableDatas.push(tableData);
            // Get latidude & longitude from address.
            /* Geocode.fromAddress(locationAddress.SandbagLocation).then(
                            (response) => {
                                const { lat, lng } = response.results[0].geometry.location;
                                address['id'] = index;
                                address['label'] = locationAddress.SandbagName;
                                address['address'] = locationAddress.SandbagLocation;
                                pos['lat'] = parseFloat(lat);
                                pos['lng'] = parseFloat(lng.toFixed(7));
                                address['pos'] = pos;
                                //mapAddress.push(address);
                                this.setState({
                                    mapSandBagData: this.state.mapSandBagData.concat(address),
                                });
                            },
                            (error) => {
                                console.error(error);
                            }
                        ); */
          });
        })
      )
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps) {}

  render() {
    return (
      <div className='container'>
        <div>
          <Container maxWidth='lg'>
            <Grid container direction={'column'} spacing={3}>
              <Grid item xl={12} md={12} sm={12} xs={12}>
                <Map
                  mapData={this.state.mapSandBagData}
                  defaultSelectedMarker={this.state.selectedSandBagLocation}
                />
              </Grid>

              <Grid item xl={12} md={12} sm={12} xs={12}>
                <Grid container direction={'row'} spacing={3}>
                  <Grid item>
                    <button
                      className='btn btn-lg btn-primary'
                      onClick={handleOpenClick}
                    >
                      {'Open Locations'}
                    </button>
                  </Grid>
                  <Grid item>
                    <button
                      className='btn btn-lg btn-primary'
                      onClick={handleCloseClick}
                    >
                      {'Closed Locations'}
                    </button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xl={12} md={12} sm={12} xs={12}>
                <Paper className={classes.root}>
                  {/*    <EnhancedTable
                                        rowData={this.state.sandBagTableData}
                                        dataColumns={this.state.columns}
                                /> */}
                  <SandbagsTable
                    rowData={this.state.sandBagTableData}
                    dataColumns={this.state.columns}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

export default SandbagsMap;
