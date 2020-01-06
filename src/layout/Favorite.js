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



class Favorite extends Component {

    constructor(){
        super();
        this.state = {
            //favorite :true
        }
    }

    componentDidMount(){
        this.props.dispatch(fetchCategory())
        this.props.dispatch(fetchEvent())
    }

    favorites = (id) => () => {
        this.setState(
            {
                favorite  :id 
            }
        )
    }

    render() {
        const {classes} = this.props;
        const {label} = (
            <Button>asdasdasdas</Button>
        )

        return (
            <Container className={classes.containerwidht}>
            <div style={{ paddingBottom : "100px"}} >
            <Typography variant="h4" style={{color:"#e91e63"}}><b>Favorite</b></Typography>
            <br/>
            <br/>
            <br/>
            <Grid container spacing={3} >
            {this.props.event.map(section => ( 
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
                <Grid container style={{minHeight: '150px'}}>
                    <Grid item xs={6}  >
                        <Typography variant="subtitle1" >
                        <b>{section.title}</b>
                        <br/>
                        <b ><Moment format="DD MMM YYYY" style={{color:"#e91e63"}}>{section.date_start}</Moment></b>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} align="right">
                        <Button onClick={this.favorites(section.id)}  className={classes.btnsize}  color="secondary" variant="outlined" aria-label="add to shopping cart" >
                           {this.state.favorite === 0 ? <FavoriteBorderIcon/> : <FavoriteIcon/> } 
                        </Button>
                    </Grid>
                    <Typography variant="body2" color="textSecondary">
                        {section.description}
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

export default connect(mapStateToProps)(withStyles(useStyles)(Favorite));