import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import EventIcon from '@material-ui/icons/Event';
import PaymentIcon from '@material-ui/icons/Payment';





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
      backgroundColor : "#42a5f5",
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
            <AppBar className={classes.nav} position="static" elevation={0}>
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> 
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                   <Link style={{textDecoration:"none", color:"white"}} to="/home"><b>Dumb.Tick</b></Link> 
                </Typography>
                <Button onClick={this.handleLogout} color="inherit"><b>Log-Out</b></Button>
                </Toolbar>
            </AppBar>

            <center>
            <Link to="#" ><Button variant="outlined" style={{color :"white", backgroundColor :"#42a5f5", marginTop :"5pt", marginRight:"5pt"}} ><PersonIcon/><b> Profile</b></Button></Link>
            <Link to="#" ><Button variant="outlined" style={{color :"white", backgroundColor :"#42a5f5", marginTop :"5pt", marginRight:"5pt"}} ><ConfirmationNumberIcon /><b> My Ticket</b></Button></Link>
            <Link to="#" ><Button variant="outlined" style={{color :"white", backgroundColor :"#42a5f5", marginTop :"5pt", marginRight:"5pt"}} ><PaymentIcon/><b>Payment</b></Button></Link>
            <Link to="/createEvent" ><Button variant="outlined" style={{color :"white", backgroundColor :"#42a5f5", marginTop :"5pt", marginRight:"5pt"}} ><EventIcon/><b>Add Event</b></Button></Link>

            </center>
            </div>
     
        )
    }
}

export default withStyles(useStyles)(Nav);