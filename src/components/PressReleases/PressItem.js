import * as React from "react";
import {
    Grid,
    Typography,
    Link,
}
    from "@mui/material";
import clsx from 'clsx';
import DateCircle from "./DateCircle";
import ACRButton from "../ACRButton";

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


export default function PressItem({ data, expanded }) {
    const classes = useStyles();
    return (

        <Grid container spacing={2} xs={12}>

            <Grid item container spacing={0} xs={2} justifyContent='flex-end'>
                <DateCircle day={data.day} date={data.date} year={data.year} />
            </Grid>

            <Grid item container spacing={0} xs={10} marginBottom={3}>
                <Grid item container xs={12}>
                    <Typography component="span" className={clsx(classes.text, classes.timeByline)}> {data.time} </Typography>
                </Grid>
                <Grid item container xs={12} >
                    <Typography component="h3" variant="h5" className={classes.title} >
                        {
                            expanded ?
                                data.title
                                :
                                (<Link href={data.link} title={data.title}> {data.title} </Link>)
                        }

                    </Typography>
                </Grid>
                {expanded && (
                    <>
                        <Grid item container xs={12} >
                            <Typography paragraph className={clsx(classes.text, classes.clipped)}>
                                {data.desc}
                            </Typography>
                        </Grid>
                        <Grid item container xs={12}>
                            <ACRButton text="Read More" link={data.link} size="small" />
                        </Grid>
                    </>
                )

                }
            </Grid>

        </Grid >

    );
}
