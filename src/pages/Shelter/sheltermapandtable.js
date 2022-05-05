import React from 'react';
import Map from '../../Components/Map/index';
import EnhancedTable from '../../Components/Table';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

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
let petFilter;
let specialFilter;
let statusClick = false;
let petClick = false;
let specialClick = false;

const selectStatusOptions = { OPEN: 'OPEN', CLOSED: 'CLOSED' };
const selectPetOptions = { Yes: 'Yes', No: 'No' };
const selectSpecialOptions = { Yes: 'Yes', No: 'No' };

function getPercentage(cell, row) {
  return ((cell * 100) / row).toFixed(2);
}

function percentageFormatter(cell, row) {
  return <span>{getPercentage(cell, row.capacity)}%</span>;
}

const handleStatusClick = () => {
  if (statusClick == false) {
    statusFilter('OPEN');
    statusClick = true;
  } else {
    statusFilter('');
    statusClick = false;
  }
};

const handlePetClick = () => {
  if (petClick == false) {
    petFilter('Yes');
    petClick = true;
  } else {
    petFilter('');
    petClick = false;
  }
};

const handleSpecialClick = () => {
  if (specialClick == false) {
    specialFilter('Yes');
    specialClick = true;
  } else {
    specialFilter('');
    specialClick = false;
  }
};

const handleClick = () => {
  statusFilter('');
  petFilter('');
  specialFilter('');
};

const rowEvents = {
  onClick: (e, row, rowIndex) => {
    console.log(`clicked on row with index: ${rowIndex}`);
  },
};

class ShelterMapandTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shelterList: [],
      requiredShelterData: [],
      shelterMapData: [],
      defaultShelterDataSortBy: 'availability',
      selectedShelter: null,
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
              // statusFilter was assigned once the component has been mounted.
              statusFilter = filter;
            },
          }),
        },
        {
          dataField: 'label',
          text: 'Shelter Name',
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
              this.setState({ selectedShelter: row.id });
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
          dataField: 'capacity',
          text: 'Total Capacity',
          align: 'center',
          headerAlign: 'center',
          headerStyle: {
            backgroundColor: '#EFEFEF',
            outline: 'none !important',
          },
          sort: true,
        },
        {
          dataField: 'availability',
          text: 'Availability',
          formatter: percentageFormatter,
          align: 'center',
          headerAlign: 'center',
          headerStyle: {
            backgroundColor: '#EFEFEF',
            outline: 'none !important',
          },
          sort: true,
        },
        {
          dataField: 'pet_friendly',
          text: 'Pet Friendly',
          align: 'center',
          headerAlign: 'center',
          headerStyle: {
            backgroundColor: '#EFEFEF',
            outline: 'none !important',
          },
          sort: true,
          filter: selectFilter({
            options: selectPetOptions,
            style: { width: '100%' },
            getFilter: (filter) => {
              // qualityFilter was assigned once the component has been mounted.
              petFilter = filter;
            },
          }),
        },
        {
          dataField: 'functional_needs',
          text: 'Special Needs',
          align: 'center',
          headerAlign: 'center',
          headerStyle: {
            backgroundColor: '#EFEFEF',
            outline: 'none !important',
          },
          sort: true,
          filter: selectFilter({
            options: selectSpecialOptions,
            style: { width: '100%' },
            getFilter: (filter) => {
              // qualityFilter was assigned once the component has been mounted.
              specialFilter = filter;
            },
          }),
        },
      ],
    };
  }

  componentDidMount() {
    let shelterDatas = [];
    let shelterMapDatas = [];

    fetch(
      'https://api.alachuacounty.us/hurricane-next-api/apidev/getShelterData'
    )
      .then((res) =>
        res
          .json()
          .then((data) => {
            this.setState({ shelterList: data });
            data.forEach((shelter) => {
              let shelterData = {};
              let mapData = {};
              let pos = {};
              shelterData['id'] = shelter.dataid;
              shelterData['status'] = shelter.status;
              shelterData['label'] = shelter.label;
              shelterData['address'] = shelter.address;
              shelterData['capacity'] = shelter.capacity;
              shelterData['availability'] = shelter.availability;
              shelterData['pet_friendly'] = shelter.pet_friendly;
              shelterData['functional_needs'] = shelter.functional_needs;
              shelterDatas.push(shelterData);
              mapData['id'] = shelter.dataid;
              mapData['label'] = shelter.label;
              mapData['address'] = shelter.address;
              pos['lat'] = parseFloat(shelter.latitude);
              pos['lng'] = parseFloat(shelter.longitude);
              mapData['pos'] = pos;
              shelterMapDatas.push(mapData);
            });
          })
          .then(() => {
            this.setState({ requiredShelterData: shelterDatas });
            this.setState({ shelterMapData: shelterMapDatas });
          })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className='container'>
        <div>
          <Container maxWidth='lg'>
            <Grid container direction={'column'} spacing={3}>
              {this.state.shelterMapData.length >= 0 ? (
                <Grid item xl={12} md={12} sm={12} xs={12}>
                  <Map
                    mapData={this.state.shelterMapData}
                    defaultSelectedMarker={this.state.selectedShelter}
                  />
                </Grid>
              ) : null}

              <Grid item xl={12} md={12} sm={12} xs={12}>
                <Grid container direction={'row'} spacing={3}>
                  <Grid item>
                    <button
                      className='btn btn-lg btn-primary'
                      onClick={handleStatusClick}
                    >
                      {'Filter Open Shelters'}
                    </button>
                  </Grid>
                  <Grid item>
                    <button
                      className='btn btn-lg btn-primary'
                      onClick={handlePetClick}
                    >
                      {'Filter Pet Friendly Shelters'}
                    </button>
                  </Grid>
                  <Grid item>
                    <button
                      className='btn btn-lg btn-primary'
                      onClick={handleSpecialClick}
                    >
                      {'Filter Special Needs Shelters'}
                    </button>
                  </Grid>
                  <Grid item>
                    <button
                      className='btn btn-lg btn-primary'
                      onClick={handleClick}
                    >
                      {'Clear all Filters'}
                    </button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={12} md={12} sm={12} xs={12}>
                <Paper className={classes.root}>
                  <EnhancedTable
                    rowData={this.state.requiredShelterData}
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

export default ShelterMapandTable;
