import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import HomeIcon from '@material-ui/icons/Home';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import BuildIcon from '@material-ui/icons/Build';
import AppsIcon from '@material-ui/icons/Apps';
import InfoIcon from '@material-ui/icons/Info';

import withHocs from './DrawersHoc';

import Routes from "../Routes/Routes";
import { Link } from 'react-router-dom';



class SimpleTabs extends  React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = (event, open) => { this.setState({ open: true }); };
    handleDrawerClose = (event, open) => { this.setState({ open: false }); };

    handleLogout(event) {
        event.preventDefault();
        localStorage.removeItem('token_access');
        window.location.reload();
    }

    render()
    {
        const { classes, theme } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap className={classes.title}>
                            Aidaprint - Управление сайтом
                        </Typography>
                        <Button onClick={e => this.handleLogout(e)} color="inherit">Выход</Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                    open={open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        <Link className={classes.link} to={'/'}>
                            <ListItem button>
                                <ListItemIcon><HomeIcon/></ListItemIcon><ListItemText primary={'Главная страница'}/>
                            </ListItem>
                        </Link>
                        <Link className={classes.link} to={'/productionpage'}>
                            <ListItem button>
                                <ListItemIcon><ShopTwoIcon/></ListItemIcon><ListItemText primary={'Страницы продуктов'}/>
                            </ListItem>
                        </Link>
                        <ListItem button>
                            <ListItemIcon><BuildIcon/></ListItemIcon><ListItemText primary={'Настройки системы'}/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem button>
                            <ListItemIcon><AppsIcon/></ListItemIcon><ListItemText primary={'Все модули'}/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><HeadsetMicIcon/></ListItemIcon><ListItemText primary={'Поддержка'}/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><InfoIcon/></ListItemIcon><ListItemText primary={'О нас'}/>
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {/*Routes*/}
                    <Routes />
                </main>
            </div>
        );
    }
}

export default withHocs(SimpleTabs);