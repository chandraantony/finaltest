import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import QRCode from 'qrcode.react'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import {connect} from 'react-redux'
import { fetchOrder } from '../_action/orderAction'
import Moment from 'react-moment';




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

class PaymentBody extends Component {

    componentDidMount(){
        const id = localStorage.getItem('User-Id')
        this.props.dispatch((fetchOrder(id)))
    }

    constructor(){
        super();
        this.state ={
            open : false
        }
    }

    handleOpen = () => {
        this.setState({
            open : true
        })
    }

    handleClose = () => {
        this.setState({
            open : false
        })
    }


    render() {
        const {classes} = this.props
        return (
            <Container maxWidth="lg" style={{paddingTop : "100px"}}>
                <h1 style={{color: "#e91e63"}}>Payment</h1>
                <div style={{backgroundColor:"white", minHeight:"100vh"}}> 
                <hr size="10" color="#e91e63"/>
                {this.props.order.map(section => (
                <div key={section.id}>
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
                            <QRCode value="http://facebook.github.io/react/" />
                            </Grid>
                        </Grid>
                    </Paper>  
                    &nbsp;
                </Paper>
                <div style={{marginRight:"20vh", marginLeft:"20vh"}}>
                <Grid container direction="row" style={{paddingTop:"20px"}}>
                        <Grid item xs={6} >
                            <Typography variant="h5" ><b>Shopping Summary</b></Typography>
                            <Typography>Total Price ({section.quantity} item)</Typography>
                        </Grid>
                        <Grid item xs={6} align="right" >
                            <Typography variant="h4" style={{color:"#e91e63"}}><b>{section.eventId.price * section.quantity}</b></Typography>
                        </Grid>
                </Grid>
                </div>
                <br/>
                <div style={{marginRight:"20vh", marginLeft:"20vh", marginTop :"50px"}}>
                <hr size="5" color="#e91e63" />
                <Grid container direction="row" style={{paddingTop:"20px"}}>
                        <Grid item xs={6} >
                            <Typography variant="h5" ><b>Prove Of Payment</b></Typography>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8D-gkI5DetWJYAj74yD6TvvtY8A48q9RIB029OP8s5V2o_ccB" height="150px" width="150px"></img>
                        </Grid>
                        <Grid item xs={6} align="right">
                            <Button onClick={this.handleOpen} variant="outlined" style={{color : "white", backgroundColor :"#e91e63"}}><Typography variant="h5">Confirm</Typography></Button>
                        </Grid>
                </Grid>
            
                <br/> 
                </div>
                </div>
                ),)}
                </div>
                
                <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  open={this.state.open}
                  autoHideDuration={3000}
                  ContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={<span id="message-id">Ditunggu Yatch</span>}
                  action={[
                    <IconButton
                      key="close"
                      aria-label="close"
                      color="inherit"
                      onClick={this.handleClose}
                    >
                      <CloseIcon />
                    </IconButton>,
                  ]}
                />
            </Container>

        )
    }
}
const mapStateToProps = state => ({
    order : state.orderReducer.one,
  }
)

export default  connect(mapStateToProps)(withStyles(useStyles)(PaymentBody))