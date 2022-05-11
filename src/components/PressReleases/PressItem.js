import * as React from "react";
import {
    Grid,
    Typography
}
    from "@mui/material";
import clsx from 'clsx';
import DateCircle from "./DateCircle";

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: '70px',
        width: '70px',
        background: '#D0EDFC',
    },
    text: {
        color: '#12274B',
    },
    timeByline: {
        fontWeight: 'bold',
        fontSize: '16px !important',

    },
    title: {
        color: '#1968B2',
    },
    clipped: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        height: '100px',
        lineClamp: '4',

    },

}));


export default function PressItem({ day, date, year }) {
    const classes = useStyles();
    return (

        <Grid container spacing={2} xs={12} sm={6}>
            <Grid container spacing={3} xs={2}>
                <DateCircle day='Fri' date='Jul 21' year='2022' />
            </Grid>

            <Grid container spacing={1} xs={10}>
                <Grid item container xs={12}>
                    <Typography component="span" className={clsx(classes.text, classes.timeByline)}> 9:00 AM </Typography>
                </Grid>
                <Grid item container xs={12} >
                    <Typography component="h3" variant="h5" className={classes.title} > Title </Typography>
                </Grid>
                <Grid item container xs={12} >
                    <Typography paragraph className={clsx(classes.text, classes.clipped)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Typography>
                </Grid>
                <Grid item container xs={12}>
                    <span className={classes.text}> Button goes here</span>
                </Grid>
            </Grid>

        </Grid >

    );
}
