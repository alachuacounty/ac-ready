import {
    AppBar,
    Link,
    List,
    ListItem,
    Toolbar,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SubMenu from './SubMenu';
import DrawerNavigation from './DrawerNavigation';


const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        zIndex: '1400',
        flexGrow: '0',
        flexShrink: '1',
        flexBasis: 'auto',
        textAlign: 'left',
        background: '#1968B2',
    },
    toolbar: theme.mixins.toolbar,
    gridList: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '0px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    mobileList: {
        background: '#FFFFFF',
    },
    mobileItem: {
        color: theme.palette.primary.main,
    },
    navItem: {
        fontWeight: 'bold',
        padding: '0 16px',
        width: 'auto',
        fontSize: '14px',
    },
}));

const navItems = [
    { title: 'Hurricane Home', link: '/' },
    { title: 'Prepare', link: '/prepare', submenu: [{ title: 'Shelters', link: '/shelters' }, { title: 'Sandbag Locations', link: '/sandbags' }, { title: 'FAQs', link: '/faqs' }] },
    { title: 'Updates', link: '/updates', submenu: [{ title: 'Advisories', link: '/advisories' }, { title: 'Road Closures', link: '/roadclosures' }] },
    { title: 'Important Links', link: '/importantlinks' },
    { title: 'Emergency Orders', link: '/emergencyorders' },
];

export default function IncidentNavigation() {
    const classes = useStyles();

    return (
        <AppBar position='absolute' className={classes.appBar}>
            <Toolbar variant='dense'>

                <DrawerNavigation navItems={navItems}></DrawerNavigation>


                <List className={classes.gridList}>
                    {navItems.map((item, index) => {
                        return item.submenu ?
                            (
                                <ListItem className={classes.navItem} key={`nav2-${index}`}>
                                    <SubMenu item={item}></SubMenu>
                                </ListItem>

                            )
                            :
                            (
                                <ListItem className={classes.navItem} key={`nav2-${index}`}>
                                    <Link href={item.link} color='inherit' title={item.title}>
                                        {item.title}
                                    </Link>
                                </ListItem>
                            )
                    }
                    )}
                </List>
            </Toolbar>
        </AppBar>
    );
}
