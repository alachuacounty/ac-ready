import * as React from "react";
import {
    Avatar,
    Stack,
    Grid
}
    from "@mui/material";

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: '70px',
        width: '70px',
        background: '#D0EDFC',
    },
    text: {
        fontSize: '14px',
        color: '#12274B',
        textTransform: 'Uppercase',
    },
    day: {
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
                    <Grid item container xs={12} justifyContent='center' className={classes.day}>
                        <span className={classes.text}>{day}</span>
                    </Grid>
                    <Grid item container xs={12} justifyContent='center'>
                        <span className={classes.text}> {date} </span>
                    </Grid>
                    <Grid item container xs={12} justifyContent='center'>
                        <span className={classes.text}> {year}</span>
                    </Grid>
                </Grid>


            </Avatar>
        </Stack>
    );
}
