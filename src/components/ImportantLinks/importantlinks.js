import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ExpansionPanel } from '@material-ui/core';
import { ExpansionPanelDetails } from '@material-ui/core';
import { ExpansionPanelSummary } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginLeft: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  section: {
    marginBottom: '2rem',
  },
  sectionHeading: {
    color: '#4e4e4e!important',
  },
  grey: {
    color: '#464545',
  },
}));

export default function ImportantLinksComponent() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [linksList, setLinkLists] = React.useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    fetch(
      'https://api.alachuacounty.us/hurricane-next-api/apidev/getImportantLinks'
    ).then((res) =>
      res
        .json()
        .then((data) => setLinkLists(data))
        .catch((err) => console.log(err))
    );
  }, []);

  const preventDefault = (event) => event.preventDefault();

  function LinksList(props) {
    const list = props.list;
    const categoryID = props.categoryID;
    const listItems = list.map((element, index) => (
      <ExpansionPanel
        expanded={expanded === 'panel' + categoryID + index.toString()}
        onChange={handleChange('panel' + categoryID + index.toString())}
        className={classes.grey}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={'panel' + categoryID + index.toString() + 'bh-content'}
          id={'panel' + categoryID + index.toString() + 'bh-header'}
        >
          {console.log({ index })}
          <Typography>
            <Link href={element.LinkAddress} target='_blank' rel='noopener'>
              {element.LinkText}
            </Link>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{element.LinkDescription}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ));

    return <div> {listItems} </div>;
  }

  function groupBy(arr, prop) {
    /*  if (arr == []) {
      return [
        []
      ];
    }*/

    const map = new Map(Array.from(arr, (obj) => [obj[prop], []]));
    arr.forEach((obj) => map.get(obj[prop]).push(obj));
    return Array.from(map.values());
  }

  function CategoriesList(props) {
    const categoriesList = groupBy(props.list, 'LinkCategory');
    console.log(categoriesList);

    const groupItems = categoriesList.map((element, index) => (
      <div className={classes.section}>
        <h3 className={classes.sectionHeading}>{element[0].LinkCategory}</h3>
        <LinksList list={element} categoryID={index}></LinksList>
      </div>
    ));

    return <div>{groupItems}</div>;
  }

  return (
    <div className={classes.root}>
      <CategoriesList list={linksList}> </CategoriesList>
    </div>
  );
}
