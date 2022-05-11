import * as React from "react";
import {
    Avatar,
    Stack,
    Grid,
    Typography
}
    from "@mui/material";

import { makeStyles } from '@mui/styles';

import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: '62px',
        width: '62px',
        background: '#D0EDFC',
    },
    text: {
        fontSize: '14px',
        color: '#12274B',
        textTransform: 'Uppercase',
        lineHeight: '1',
    },
    highlight: {
        fontWeight: 'bold',
        fontSize: '16px !important',

    },

}));


export default function DateCircle({ day, date, year }) {
    const classes = useStyles();
    return (
        <Stack direction="row" spacing={2}>
            <Avatar className={classes.avatar}>

                <Grid container spacing={0}>
                    <Grid item container xs={12} justifyContent='center'>
                        <Typography component="span" className={clsx(classes.text, classes.highlight)}>{day}</Typography>
                    </Grid>
                    <Grid item container xs={12} justifyContent='center'>
                        <Typography component="span" className={classes.text}> {date} </Typography>
                    </Grid>
                    <Grid item container xs={12} justifyContent='center'>
                        <Typography component="span" className={classes.text}> {year}</Typography>
                    </Grid>
                </Grid>


            </Avatar>
        </Stack>
    );
}
