import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import QRCode from 'qrcode.react'
import { connect } from 'react-redux'
import { fetchTicket } from '../_action/orderAction'
import Moment from 'react-moment'




const useStyles = (theme => ({
    root :{
        flexGrow :1,
    },

    media: {
        height: "170px",
        minWidth : "900px"
    },

    overlay: {
        position: 'absolute',
        top: '20px',
        right: '10px',
        color: 'black',
        backgroundColor: 'white',
        borderRadius : 20,

    },
    containerwidht : {
        maxWidth : '90%'
        
    },
    spacemargin :{
        padding: theme.spacing(3),
      
    },
    btnsize :{
        maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px',maxHeight: '40px',
        borderRadius: 50,
    },

      
  }));

class Ticket extends Component {
        componentDidMount(){
        const id = localStorage.getItem('User-Id')
        this.props.dispatch((fetchTicket(id)))
    }

    render() {
        const {classes} = this.props
        const today = new Date();
        const date = today

        return (

            <Container maxWidth="lg" style={{paddingTop : "100px"}}>
                <h1 style={{color: "#e91e63"}}>My Ticket</h1>
                <div style={{backgroundColor:"white", minHeight:"100vh"}}>
                <hr size="10" color="#e91e63"/>
                {this.props.order.map(section => (
                <Paper style={{marginRight:"20vh", marginLeft:"20vh", backgroundColor:"#e91e63", marginTop :"50px"}}>
                &nbsp;
                    <Paper style={{marginRight:"40px", marginLeft:"40px", minHeight:"150px"}}>
                        <Grid container direction="row" style={{backgroundColor : "#fee6e6", minHeight:"50px"}}>
                            <Grid item xs={6} style={{paddingLeft : "20px"}}>
                                <Typography variant="h6">{section.userId.username}</Typography>
                                <Typography variant="caption">id user.{section.user_id}</Typography>
                            </Grid>
                            <Grid item xs={6} align="right" style={{paddingRight : "20px"}}>
                            <Typography variant="caption">Face Value {section.eventId.price} </Typography>
                            <Typography variant="body2">id confirm.{section.id}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" >
                            <Grid item xs={6} style={{paddingLeft : "20px",paddingTop : "20px", paddingBottom:"20px"}}>
                                <Typography variant="h4"><b>{section.eventId.title}</b></Typography>
                                <Typography>{section.eventId.address}</Typography>
                                <Typography color="textSecondary"><Moment >{section.eventId.date_start}</Moment></Typography>
                            </Grid>
                            <Grid item xs={6} align="right" style={{paddingRight : "20px",paddingTop : "20px", paddingBottom:"20px"}}>
                            <Typography></Typography>
                            <QRCode value="http://facebook.github.io/react/" />
                            </Grid>
                        </Grid>
                    </Paper>  
                    &nbsp;
                </Paper>
                ),)}
                <br/>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    order : state.orderReducer.all,
  }
)

export default  connect(mapStateToProps)(withStyles(useStyles)(Ticket))