import React from 'react';
import {
    useParams
} from "react-router-dom";
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import IncidentLayout from '../components/Branding/IncidentLayout';
import ACRButton from '../components/ACRButton';

const useStyles = makeStyles((theme) => ({
    publish: {
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    lastupdated: {
        fontStyle: 'italic',
    },
    hidden: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
}));

const data = {
    publish: "Published on 7/6/2021",
    lastupdated: "Last updated on 7/6/2021",
    content:
        "Tropical storm force winds are expected in Alachua County in the mid-morning hours until the late afternoon. The strongest winds are expected west of I-75, and in open areas like fields and lakes. Hurricane-force winds are not expected in Alachua County. Homeowners should clear their yards of debris and items that may be picked up by wind and cause damage to homes. Those who live in a flood-prone area or feel their home is unsafe should consider staying with family, friends, or in a hotel."
        +
        "Other than essential services, all Alachua County offices, parks, and Camp Cuscowilla activities will be closed tomorrow, July 7. These closures will continue until staff verifies that conditions are safe.Residents should monitor the Alachua County website and social media for reopening announcements."
        +
        "The University of Florida, Santa Fe College, the Florida Department of Health in Alachua County, the Supervisor of Elections Office, and Alachua County Public School offices, programs, meal distributions, and camps will be closed tomorrow.Other than emergency services, all City of Gainesville offices and programs will be closed tomorrow."
        +
        "Alachua County has activated the 311 Critical Information Line.This line is for the latest storm updates.Those who have a medical or law enforcement emergency should call 911. For non- emergency law enforcement issues, call 352 - 955 - 1818."
        +
        "For more information, contact Alachua County Communications Director Mark Sexton at 352 - 264 - 6979 or msexton @alachuacounty.us.",

}


export default function AdvisoryContent({ title }) {

    const params = useParams();
    const classes = useStyles();

    return (
        <IncidentLayout title={'Tropical Strom Elsa Update #' + params.UpdateNumber} title2={title}>

            <Grid container xs={12} spacing={3}>
                <Grid item xs={12} marginBottom={4}>
                    <Typography className={classes.publish}>
                        {data.publish}
                    </Typography>
                    <Typography className={classes.lastupdated}>
                        {data.lastupdated}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {data.content}
                </Grid>
                <Grid item xs={12}>
                    <ACRButton text="View all updates" link='/advisories' size="small" />
                </Grid>
            </Grid>

        </IncidentLayout>
    );
}