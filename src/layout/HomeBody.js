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
import { fetchCategory } from '../_action/categoryAction'
import { fetchEvent } from '../_action/eventAction'
import Grid from '@material-ui/core/Grid';
import Moment from 'react-moment';
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Truncate from 'react-truncate';
import axios from 'axios'
import moment from 'moment'



const useStyles = (theme => ({
    root :{
        flexGrow :1,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 50,
    },
    newmedia: {
        height: 200,
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        right: '10px',
        color: 'black',
        backgroundColor: 'white',
        borderRadius : 20
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
    }
      
  }));



class HomeBody extends Component {

    constructor(){
        super();
        this.state = {
        favorite :true,
        show : false,
        id : 1,
        idEvent : 1,
        newfav : 1,
        }
    }

    componentDidMount(){
        this.props.dispatch(fetchCategory())
        this.props.dispatch(fetchEvent())
        this.fav(this.state.id);
    }

    
    favorites = (id) => () => {
        this.setState(
            {
                favorite  : !this.state.favorite 
            }
        )
    }
    search = (event)  =>{
        if(event.target.value == ""){
            this.setState({
                show : false
            })
            }else{
                this.setState({
                    show : true,
                    value : event.target.value
                })
            }
    }
    fav = (id) =>{
        const id_user= localStorage.getItem('User-Id');
        const id_event = id;
        axios.post('http://localhost:5000/api/v1/favorite', {
             id_event : id_event,
             id_user : id_user
          }).then(res => {
             if(res.data){
                console.log(res.data)
             }else{
                 console.log('asdasd')
             }
          })
    }
    render() {
        const {classes} = this.props;
        const today = new Date()
        return (
            <Container className={classes.containerwidht} > 
                <TextField
                    label="Search"
                    placeholder="Search Ticket"
                    onChange={this.search}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />   

            {this.state.show ? 
            (
                <div >
                <br/>
                <Typography variant="h4" style={{color:"#e91e63"}}><b>Search Result for '{this.state.value}'</b></Typography>
                <br/>
                <br/>
                <br/>
                <Grid container spacing={3} align="center">
                {this.props.event.filter(section => section.title.includes(this.state.value)).map(section =>(
                    <Grid  item sm={4} xs={12} key={section.id} >
                    <Card className={classes.card} variant="outlined">
                        <Link to={`/event/${section.id}`} style={{textDecoration: "none", color:"#e91e63"}}>
                        <CardActionArea>
                        <CardMedia
                            className={classes.newmedia}
                            image={section.image}
                            title={section.title}
                        />
                        <div className={classes.overlay}>
                            <Typography className={classes.spacemargin} variant="caption" style={{color:"#e91e63"}}>{section.price === 0 ? 'Rp. Free' : `Rp. ${section.price}` }</Typography> 
                        </div>
                        </CardActionArea>
                        </Link>
                    <div className={classes.spacemargin} >
                    <Grid container style={{minHeight: '150px'}} align="left">
                        <Grid item xs={10}  >
                            <Typography variant="subtitle1" >
                            <b>{section.title}</b>
                            <br/>
                            <b ><Moment format="DD MMM YYYY" style={{color:"#e91e63"}}>{section.date_start}</Moment></b>
                            </Typography>
                        </Grid>
                        <Grid item xs={2} align="right">
                            <Button onClick={this.favorites(section.id)}  className={classes.btnsize}  color="secondary" variant="outlined" aria-label="add to shopping cart" >
                               {this.state.favorite  ? <FavoriteBorderIcon/> : <FavoriteIcon/> } 
                            </Button>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" display='block' noWrap>
                            <Truncate lines={3}>
                            {section.description}
                            </Truncate>
                    </Typography>
                    </Grid>
                    </div>    
                    </Card>
                    </Grid>     
                ),)} 
                </Grid>
                </div>
            ) : ""}
            <div style={{paddingTop : "20px"}} >
                <Typography variant="h4" style={{color:"#e91e63"}}><b>Category</b></Typography>
                <br/>
            <Grid container spacing={3}>
            {this.props.menu.map(section => (    
                <Grid item sm={3} xs={12} key={section.id}  >
                <Card className={classes.card} elevation={1}>
                    <Link to={`/category/${section.id}`} style={{textDecoration: "none", color:"#e91e63"}}>
                    <CardActionArea>                    
                    <CardMedia
                        className={classes.media}
                        image={section.image}
                        title="Contemplative Reptile"               
                    />
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        <b>{section.name}</b>
                    </Typography>
                    </CardActionArea>
                    </Link>
                </Card>
                </Grid>  
            ),)}   
            </Grid>
            </div>

            <div style={{paddingTop : "20px"}} >
            <Typography variant="h4" style={{color:"#e91e63"}}><b>Today</b></Typography>
            <br/>
            <Grid container spacing={3} align="center">
            {this.props.event.filter(section => moment(section.date_start).format('MM/DD/YYYY') === moment(today).format('MM/DD/YYYY')).map(section =>(
                <Grid  item sm={4} xs={12} key={section.id} >
                <Card className={classes.card} variant="outlined">
                    <Link to={`/event/${section.id}`} style={{textDecoration: "none", color:"#e91e63"}}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.newmedia}
                        image={section.image}
                        title={section.title}
                    />
                    <div className={classes.overlay}>
                        <Typography className={classes.spacemargin} variant="caption" style={{color:"#e91e63"}}>{section.price === 0 ? 'Rp. Free' : `Rp. ${section.price}` }</Typography> 
                    </div>
                    </CardActionArea>
                    </Link>
                <div className={classes.spacemargin} >
                <Grid container style={{minHeight: '150px'}} align="left">
                    <Grid item xs={10}  >
                        <Typography variant="subtitle1" >
                        <b>{section.title}</b>
                        <br/>
                        <b ><Moment format="DD MMM YYYY" style={{color:"#e91e63"}}>{section.date_start}</Moment></b>
                        </Typography>
                    </Grid>
                    <Grid item xs={2} align="right">
                        <Button onClick={this.favorites(section.id)}  className={classes.btnsize}  color="secondary" variant="outlined" aria-label="add to shopping cart" >
                           {this.state.favorite  ? <FavoriteBorderIcon/> : <FavoriteIcon/> } 
                        </Button>
                    </Grid>
                    <Typography variant="body2" color="textSecondary" display='block' noWrap>
                        <Truncate lines={3}>
                        {section.description}
                        </Truncate>
                </Typography>
                </Grid>
                </div>    
                </Card>
                </Grid>     
            ),)} 
            </Grid>
            </div>

            <div style={{paddingTop : "20px", paddingBottom : "20px"}} >
            <Typography variant="h4" style={{color:"#e91e63"}}><b>Upcoming</b></Typography>
            <br/>
            <Grid container spacing={3} align="center">
            {this.props.event.filter(section => moment(section.date_start).format('MM/DD/YYYY') > moment(today).format('MM/DD/YYYY')).map(section =>(
                <Grid  item sm={4} xs={12} key={section.id} >
                <Card className={classes.card} variant="outlined">
                    <Link to={`/event/${section.id}`} style={{textDecoration: "none", color:"#e91e63"}}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.newmedia}
                        image={section.image}
                        title={section.title}
                    />
                    <div className={classes.overlay}>
                        <Typography className={classes.spacemargin} variant="caption" style={{color:"#e91e63"}}>{section.price === 0 ? 'Rp. Free' : `Rp. ${section.price}` }</Typography> 
                    </div>
                    </CardActionArea>
                    </Link>
                <div className={classes.spacemargin} >
                <Grid container style={{minHeight: '150px'}} align="left">
                    <Grid item xs={10}  >
                        <Typography variant="subtitle1" >
                        <b>{section.title}</b>
                        <br/>
                        <b ><Moment format="DD MMM YYYY" style={{color:"#e91e63"}}>{section.date_start}</Moment></b>
                        </Typography>
                    </Grid>
                    <Grid item xs={2} align="right">
                        <Button onClick={this.favorites(section.id)}  className={classes.btnsize}  color="secondary" variant="outlined" aria-label="add to shopping cart" >
                           {this.state.favorite  ? <FavoriteBorderIcon/> : <FavoriteIcon/> } 
                        </Button>
                    </Grid>
                    <Typography variant="body2" color="textSecondary" display='block' noWrap>
                        <Truncate lines={3}>
                        {section.description}
                        </Truncate>
                </Typography>
                </Grid>
                </div>    
                </Card>
                </Grid>     
            ),)} 
            </Grid>
            </div>
          </Container>
        )
    }
}

const mapStateToProps = state => ({
    menu : state.categoryReducer.all,
    event : state.eventReducer.all
  }
)

export default connect(mapStateToProps)(withStyles(useStyles)(HomeBody));