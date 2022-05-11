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
        height: '77px',
        width: '77px',
        background: '#D0EDFC',
    },
    text: {
        fontSize: '14px',
        color: '#12274B',
        textTransform: 'Uppercase',
    },
    menuLink: {

    },

}));


export default function DateCircle({ day, date, year }) {
    const classes = useStyles();
    return (
        <Stack direction="row" spacing={2}>
            <Avatar className={classes.avatar}>

                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <span className={classes.text}>Fri</span>
                    </Grid>
                    <Grid item xs={12}>
                        <span className={classes.text}> Jul 21 </span>
                    </Grid>
                    <Grid item xs={12}>
                        <span className={classes.text}> 2022</span>
                    </Grid>
                </Grid>


            </Avatar>
        </Stack>
    );
}
