import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';


const useStyles = (theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    nav :{
      backgroundColor : "#880e4f",
    },
  }));

class Nav extends Component {

  handleLogout = () => {
    localStorage.clear();
    window.location.href='/home';
  }
    render() {
      const {classes} = this.props;
        return (
          <div className={classes.root}>
            <AppBar className={classes.nav} position="static" elevation={2}>
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> 
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                   <Link style={{textDecoration:"none", color:"white"}} to="/home"><b>Bomb.Tick</b></Link> 
                </Typography>
                <Button onClick={this.handleLogout} variant="outlined" color="inherit"><b>Log-Out</b></Button>
                </Toolbar>
            </AppBar>
            </div>
     
        )
    }
}

export default withStyles(useStyles)(Nav);