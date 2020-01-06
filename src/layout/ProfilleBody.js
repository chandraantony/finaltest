import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Truncate from 'react-truncate';
import Edit from '../layout/Edit';
import { connect } from 'react-redux';
import { fetchOneUser } from '../_action/userAction'


const usestyle = (theme =>({
    root :{
        flexGrow :1,
        paddingTop : "10vh",
        paddingBottom : "10vh"
    },

    btnSize : {
        minWidth : "200px",
        maxWidth : "200px",
        maxHeight : "200px",
        minHeight : "200px"
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
}))


class ProfilleBody extends Component {
    
    componentDidMount(){
        const id = localStorage.getItem('User-Id')
        console.log(id)
        this.props.dispatch(fetchOneUser(id))
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Container maxWidth="md" className={classes.root} >
                    <Grid container direction="row">
                        <Grid item xs={12} sm={6}>
                        <Typography variant="h4" style={{color :"#e91e63"}}><b>Profile</b></Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} align="right">
                        <Edit/>
                        </Grid>
                    </Grid>
                    <br/>
                    <hr color="#e91e63" size="5" style={{backgroundColor : "#e91e63"}}/>
                    <br/>
                <Grid container direction="row">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3"><b>{this.props.user.username}</b></Typography>
                        <Typography variant="h4" color="textSecondary"><b>{this.props.user.email}</b></Typography>
                        <Typography variant="h4" color="textSecondary"><b><Moment format="YYYY/MM/DD">{this.props.user.dateBirth}</Moment></b></Typography>
                        <Typography variant="h4" color="textSecondary"><b>{this.props.user.phone}</b></Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} align="right">
                        <Avatar className={classes.btnSize}><img alt="AV" src={this.props.user.image}></img></Avatar>
                    </Grid>
                </Grid>
                <br/>
                <hr color="#e91e63" size="5" style={{backgroundColor : "#e91e63"}}/>
                </Container>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    user : state.userReducer.one
  }
)

export default  connect(mapStateToProps)(withStyles(usestyle)(ProfilleBody))