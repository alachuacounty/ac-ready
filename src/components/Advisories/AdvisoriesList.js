import { useState, useEffect } from "react";
import {
    Grid,
    Typography
}
    from "@mui/material";
import clsx from 'clsx';



import { makeStyles } from '@mui/styles';
import PressItem from "../PressReleases/PressItem";

const useStyles = makeStyles((theme) => ({

    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
}));

const mockpressdata = {
    day: 'Fri',
    date: 'Jul 21',
    year: '2022',
    time: '9:00 AM',
    title: 'Lastest Road closures and Openings ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    link: '/',
}

const pressReleaseList = [mockpressdata, mockpressdata, mockpressdata, mockpressdata, mockpressdata];


export default function AdvisoriesList() {

    const classes = useStyles();

    return (

        <Grid container xs={12} spacing={3} justifyContent='flex-start'>

            {pressReleaseList.map((data, index) => (
                <PressItem data={data} expanded={true} />
            ))}

        </Grid>


    );
}
