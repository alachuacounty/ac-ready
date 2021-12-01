import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
export default function Tile(props) {
  const classes = useStyles();

  const openSurvey = () => {
    //alert(props.surveyInfo.link);
    props.setSurveyLink(props.surveyInfo.link);
    props.setTileMode(false);
  };

  const { background } = useBackgroundStyles(props)();
  return (
    <Paper
      square={true}
      elevation={24}
      className={background}
      onClick={openSurvey}
    >
      <Typography
        variant='h5'
        component='h1'
        color='secondary'
        className={classes.title}
      >
        {' '}
        {props.surveyInfo.title}{' '}
      </Typography>
      {/* <Divider /> */}
    </Paper>
  );
}
