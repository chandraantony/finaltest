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
import {fetchOneCategory} from '../_action/categoryAction'
import Moment from 'react-moment';
import Button from '@material-ui/core/Button'
import Truncate from 'react-truncate'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';
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
            newdate : 'asdasdsad',
        }
    }

    search = (event)  =>{
        console.log(this.state.newdate)
        if(event.target.value == ""){
                this.setState({
                    newdate : event.target.value
                })
            }
            console.log(this.state.newdate)
    }
    
    componentDidMount(){
        const id = this.props.id;
        console.log(id);
        this.props.dispatch(fetchOneCategory(id))
    }



    render() {
        const {classes} = this.props;
        const date = String(this.state.newdate);
        console.log(date)
        return (
            <Container  maxWidth="md" style={{paddingTop : "100px"}}>
            <div >
            <TextField
                    label="Search"
                    placeholder="Search Ticket"
                    onChange={this.search}
                    type="datetime-local"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
            />   
            <br/>
            <br/>
            <br/>
            <Grid container spacing={3}>
            {this.props.one.map(section =>(
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
                            <Button className={classes.btnsize}  color="secondary" variant="outlined" aria-label="add to shopping cart" >
                               <FavoriteBorderIcon/> 
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
    one : state.categoryReducer.one,
  }
)

export default connect(mapStateToProps)(withStyles(useStyles)(HomeBody));