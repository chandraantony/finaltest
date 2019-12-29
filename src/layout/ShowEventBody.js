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
        height: 500,
    },
      
  }));



class HomeBody extends Component {
    handleOrder = (event) => {
        axios.post('http://localhost:5000/api/v1/order', {
          user_id: localStorage.getItem('User-Id'),
          event_id: this.props.id,
          payment_status : 0,
          checking_status : 0
  
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
          console.log(err);
        })
        event.preventDefault();
      }

    componentDidMount(){
        const id = this.props.id;
        console.log(id);
        this.props.dispatch(fetchOneEvent(id))
    }

    render() {
        const {classes} = this.props;
        return (
            <Container  maxWidth="md" style={{marginTop : "50px",marginBottom : "100px"}}>
            <div style={{paddingTop : "100px"}} >
            <Typography variant="h4" style={{color:"#42a5f5"}}><b>Event</b></Typography>
            <br/>
            <br/>
            <br/>
            <Grid container spacing={3}>
           
                <Grid item xs={12} >
                <Card elevation={0}>
                    <Link to="#" style={{textDecoration: "none", color:"#42a5f5"}}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.newmedia}
                        image={this.props.one.image}
                        title="Contemplative Reptile"
                        label="asdasdasd"
                    />
                   
                    </CardActionArea>
                    </Link>
                </Card>
                </Grid>     
                <Grid item xs={6} >
                <Typography variant="h5" style={{color:"#42a5f5"}}><b>{this.props.one.title}</b></Typography>
                <Typography variant="body1" style={{color:"#42a5f5"}}><b>Rp.{this.props.one.price}</b></Typography>
                </Grid>
                <Grid item xs={6} align="right">
                <Button onClick={this.handleOrder} style={{color:"#42a5f5", borderColor:"#42a5f5"}} variant="outlined"><b>Order</b></Button>
                </Grid>
            </Grid>
            </div>
          </Container>
        )
    }
}

const mapStateToProps = state => ({
    one : state.eventReducer.one,
  }
)

export default connect(mapStateToProps)(withStyles(useStyles)(HomeBody));