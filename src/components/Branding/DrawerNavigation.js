import { Menu } from '@material-ui/icons';
import {
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    Divider,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    drawer: {
        //left: '56px !important',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        position: 'fixed',
        [theme.breakpoints.down('sm')]: {
            background: '#1968B2',
            position: 'relative',
        },

    },
    divider: {
        margin: '0 16px !important',
        borderWidth: '1px',
        borderColor: '#A9A9A9',
        [theme.breakpoints.down('sm')]: {
            borderColor: '#BFD8F2',
        },
    },
    drawerItem: {
        color: '#12274B',
        textTransform: 'Uppercase',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            color: '#FFFFFF',
        },

    },
    drawerSubItem: {
        textTransform: 'Capitalize',
        fontWeight: 'normal',
        [theme.breakpoints.down('sm')]: {
            color: '#FFFFFF',
        },

    },
    subList: {
        marginLeft: '30px !important',

    },
    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));



export default function DrawerNavigation({ navItems, top }) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
                onClick={handleDrawerToggle}
            >
                <Menu />
            </IconButton>
            <Drawer
                variant='temporary'
                anchor={top ? 'top' : 'left'}
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
                className={classes.drawer}
            >

                <List className={classes.mobileList}>
                    {navItems.map((item, index) => {
                        return item.submenu ?
                            (
                                <>
                                    <ListItem className={classes.drawerItem} key={`nav1-${index}`}>

                                        {item.title}
                                    </ListItem>
                                    <List className={classes.subList}>
                                        {item.submenu.map((subitem, index) =>
                                        (
                                            <ListItem className={classes.drawerSubItem} key={`nav1-${index}`}>
                                                <Link href={subitem.link} color='inherit' title={subitem.title}>
                                                    {subitem.title}
                                                </Link>
                                            </ListItem>

                                        ))}

                                    </List>


                                    <Divider variant="middle" className={classes.divider} />
                                </>
                            )
                            :
                            (
                                <>
                                    <ListItem className={classes.drawerItem} key={`nav1-${index}`}>
                                        <Link href={item.link} color='inherit' title={item.title}>
                                            {item.title}
                                        </Link>
                                    </ListItem>
                                    <Divider variant="middle" className={classes.divider} />
                                </>
                            )
                    }
                    )}
                </List>
            </Drawer>
        </>

    );
}
