import React from 'react';
import {AppBar, Avatar, Drawer, makeStyles, Toolbar, Typography} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';
import {format} from 'date-fns';
import { grey } from '@material-ui/core/colors';

const drawerWidth=240

const useStyles = makeStyles((theme) => {

    return{
        root:{
            display: 'flex'
        },
        page: {
            background: '#0C0E0C',
            width: '100%',
            padding: theme.spacing(3),
            height: '100vh'
        },
        drawer:{
            width: drawerWidth
        },
        drawerPaper:{
            width: drawerWidth,
            backgroundColor: '#191919',
            color: 'white'
        },
        active:{
            background: '#0C0E0C'
        },
        title:{
            padding: theme.spacing(2),
        },
        appbar:{
            width: `calc(100% - ${drawerWidth}px)`,
            color: 'white',
            backgroundColor: '#191919'
        },
        toolbar: theme.mixins.toolbar,
        date:{
            flexGrow: 1
        },
        avatar:{
            marginLeft: theme.spacing(2),
            transform: 'scale(1)'
        }
    }

})

const Layout = ({children}) => {

    const classes = useStyles();
    const history = useHistory();
    const location= useLocation();

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="primary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="primary" />,
            path: '/create'
        },

    ]

    return ( 

        <div className={classes.root}>
            {/* app bar*/}
            <AppBar
            className={classes.appbar}
            elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                       { format(new Date(),'do MMMM Y')}
                    </Typography>
                    <Typography>
                    Mario</Typography> 
                    <Avatar className={classes.avatar} src="/logo.png" alt="..."></Avatar>

                </Toolbar>
            </AppBar>

            {/* side drawer*/}
            <Drawer 
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper}}
            >
                <div>
                    <Typography 
                    variant="h5"
                    className={classes.title}>
                        Abhinandan
                    </Typography>
                </div>
                
                <List>
                    {menuItems.map(item => (
                        <ListItem 
                        key={item.text}
                        button
                        onClick={()=>history.push(item.path)}
                        className={location.pathname== item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>



            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                { children }
            </div>
        </div>
    );
}
 
export default Layout;