import React, { Component } from 'react'
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
      position: "sticky", 
      top: 0, 
      zIndex :1000,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    nav :{
      backgroundColor : "#ad1457",
      paddingBottom : "5pt"
    },
}));

class Menu extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
            <AppBar className={classes.nav} position="static" elevation={5}>
            <center>
            <Link to="/profile" style={{textDecoration: "none"}} ><Button  style={{color :"white", borderColor :"white", marginTop :"5pt", marginRight:"5pt"}} elevation={1}><PersonIcon/><b>Profile</b></Button></Link>
            <Link to="/myTickets" style={{textDecoration: "none"}}><Button  style={{color :"white", borderColor :"white", marginTop :"5pt", marginRight:"5pt"}} ><ConfirmationNumberIcon /><b>My Ticket</b></Button></Link>
            <Link to="/payment" style={{textDecoration: "none"}}><Button  style={{color :"white", borderColor :"white", marginTop :"5pt", marginRight:"5pt"}} ><PaymentIcon/><b>Payment</b></Button></Link>
            <Link to="/createEvent" style={{textDecoration: "none"}}><Button  style={{color :"white", borderColor :"white", marginTop :"5pt", marginRight:"5pt"}} ><EventIcon/><b>Add Event</b></Button></Link>
            </center>
            </AppBar>
            </div>
        )
    }
}

export default withStyles(useStyles)(Menu)