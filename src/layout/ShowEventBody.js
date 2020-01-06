import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOneEvent } from '../_action/eventAction'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EventIcon from '@material-ui/icons/Event';
import Box from '@material-ui/core/Box'
import Moment from 'react-moment'

const useStyles = (theme => ({
    root :{
        flexGrow :1,
        maxWidth : '90%',
        paddingBottom : "100px"
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 50,
    },
    newmedia: {
        height: 600,
    },
    spacemargin :{
        padding: theme.spacing(3),
    },
    btnsize : {
        maxWidth : "20px",
        minWidth : "20px",
        maxHeight : "30px",
        fontSize : "10pt",
        marginLeft : "5pt",
        marginRight : "5pt"
    }
      
  }));



class HomeBody extends Component {
    constructor(){
        super();
        this.state = {
            number : 1,
            stat : localStorage.getItem('Secret-Code')
            
        
        }
    }

    handleIncrease = () =>{
        this.setState(
            {
                number : this.state.number + 1,
            }
        )
    }

    handleDecrease = () =>{
        if(this.state.number > 1){
            this.setState({
                number : this.state.number - 1
            })
        }
    }


    handleOrder = (event) => {
        axios.post('http://localhost:5000/api/v1/order', {
          user_id: localStorage.getItem('User-Id'),
          event_id: this.props.id,
          payment_status : 0,
          checking_status : 0,
          quantity : this.state.number
  
        })
        .then(res => {
            window.location.href='/payment'
        })
        .catch(err => {
          console.log(err);
        })
      }

    componentDidMount(){
        const id = this.props.id;
        console.log(id);
        this.props.dispatch(fetchOneEvent(id))
        this.setState({
            total : this.props.one.price
        })
    }

    render() {
        const {classes} = this.props;
        const total = this.state.number  ;
        return (
            <Container className={classes.root}  maxWidth="md">
            {this.props.one.map(section => (
            <div style={{paddingTop : "100px"}} >
            <Grid container spacing={3} >       
                <Grid item xs={12}  >
                <Card elevation={0}  variant="outlined">           
                    <CardActionArea>
                    <CardMedia
                        className={classes.newmedia}
                        image={section.image}
                        title="Contemplative Reptile"
                    /> 
                    </CardActionArea>     
                    <div className={classes.spacemargin} >
                        <Grid container>
                            <Grid item xs={6}  >
                                <Typography variant="h4" >
                                {this.props.one.title}
                               </Typography>
                               <Typography variant="h5" style={{paddingTop : "20pt"}}> 
                                <b style={{color :"#e91e63"}}>{section.categoryId.name}</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={6} align="right">
                            <Typography style={{color :"#e91e63"}} variant="h4" >
                                <b>Rp. {section.price}</b>
                            </Typography>
                            <br/>
                            <Button  style={{color :"#e91e63"}}className={classes.btnsize} onClick={this.handleDecrease} variant="outlined">-</Button>
                            <b  style={{color :"#e91e63"}}> {this.state.number} </b>
                            <Button style={{color :"#e91e63"}} className={classes.btnsize} onClick={this.handleIncrease} variant="outlined">+</Button>
                            {this.state.stat != null ?
                            <Button onClick={this.handleOrder} style={{marginLeft:"20px", color :"#e91e63", borderColor : "#e91e63" }} variant="outlined">Buy</Button>
                            : " "
                            }
                            </Grid>     
                        </Grid>
                        <hr/>
                        <Grid container style={{marginTop : "40px"}} >
                            <Grid item xs={4}  >
                                <Typography variant="h5" >
                                    <b>Hosted By</b>
                                </Typography>
                                <br/>
                                <Grid container direction="row">
                                    <Grid item style={{marginRight :"5pt"}} >
                                        <img width="100px"  height="100px"/>
                                    </Grid>
                                    <Grid item >
                                    <Typography variant="h6" color="textSecondary">
                                        <b>{section.userId.name}</b>
                                    </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4} >
                                <div style={{marginLeft : "100px"}} >
                                <Typography variant="h5"   >
                                    <b>Date & Time</b>
                                </Typography>
                                <br/>
                                <div style={{color :"gray"}} >
                                <Grid container direction="row" >
                                <Grid item style={{marginRight:"10px"}} >
                                   <EventIcon fontSize="large"/>
                                </Grid>
                                <Grid item >
                                <Typography variant="h6"  >
                                <Moment format="DDD-MMM-YYYY">{section.date_start}</Moment>
                                </Typography>
                                </Grid>
                               </Grid>                                
                               <Grid container direction="row" >
                                <Grid item style={{marginRight:"10px"}}>
                                   <ScheduleIcon fontSize="large"/>
                                </Grid>
                                <Grid item>
                                <Typography variant="h6"  >
                                <Moment format="HH : mm">{section.date_start}</Moment>
                                </Typography>
                                </Grid>
                               </Grid>
                               </div>
                                </div>
                            </Grid>
                            <Grid item xs={4}  >
                                <div style={{marginLeft : "100px"}} >
                                <Typography variant="h5" >
                                <b>Contact Person </b>
                                </Typography>
                                <br/>
                                <div style={{color :"gray"}} >
                                <Grid container direction="row" >
                                <Grid item style={{marginRight:"10px"}} >
                                   <RecentActorsIcon fontSize="large"/>
                                </Grid>
                                <Grid item >
                                <Typography variant="h6"  >
                                    {section.userId.name}
                                </Typography>
                                </Grid>
                               </Grid>                                
                               <Grid container direction="row" >
                                <Grid item style={{marginRight:"10px"}}>
                                   <PhoneIcon fontSize="large"/>
                                </Grid>
                                <Grid item>
                                <Typography variant="h6"  >
                                    {section.userId.phone}
                                </Typography>
                                </Grid>
                                <Grid container direction="row" >
                                <Grid item style={{marginRight:"10px"}}>
                                   <MailOutlineIcon fontSize="large"/>
                                </Grid>
                                <Grid item>
                                <Typography variant="h6"  >
                                    {section.userId.email}
                                </Typography>
                                </Grid>
                               </Grid>
                               </Grid>
                               </div>
                               </div>
                            </Grid>
                        </Grid>
                    </div> 
                </Card>
                </Grid>     
            </Grid>
           
            <Grid container direction="row" spacing={3} style={{marginTop : "10vh"}}>
                
                <Grid item xs={12} sm={6} >
                    <Typography variant="h5" align="center">
                        <b style={{color :"#e91e63"}}>Description</b>
                    </Typography>
                    <br/>
                    <br/>
                    <Typography align="justify" color="textSecondary" style={{marginLeft : "20px", marginRight : "20px"}} >
                        {section.description}
                    </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} align="center">
                    <Typography variant="h5" align="center" >
                        <b style={{color :"#e91e63"}}>Maps</b>
                    </Typography>
                    <br/>
                    <br/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7789196000904!2d106.73052311427314!3d-6.2927602954455715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f00599363229%3A0x8b402407aeb11b9!2sSteak%20Hotel%20by%20Holycow*21%20TKP%20Bintaro%20Playground!5e0!3m2!1sid!2sid!4v1577784353397!5m2!1sid!2sid" width="500" height="400" frameborder="0"></iframe>
               </Grid>
            </Grid>
            </div> 
            ),)}
          </Container>
        )
    }
}

const mapStateToProps = state => ({
    one : state.eventReducer.one,
  }
)

export default connect(mapStateToProps)(withStyles(useStyles)(HomeBody));