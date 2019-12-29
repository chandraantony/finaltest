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

import Grid from '@material-ui/core/Grid';


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
        height: 150,
    },
      
  }));



class HomeBody extends Component {

    componentDidMount(){
        const id = this.props.id;
        console.log(id);
        this.props.dispatch(fetchOneCategory(id))
    }

    render() {
        const {classes} = this.props;
        return (
            <Container  maxWidth="md" style={{paddingTop : "100px"}}>
            <div style={{paddingTop : "100px"}} >
            <Typography variant="h4" style={{color:"#42a5f5"}}><b>Event</b></Typography>
            <br/>
            <br/>
            <br/>
            <Grid container spacing={3}>
            {this.props.one.map(section => ( 
                <Grid item xs={4} key={section.id}>
                <Card className={classes.card} elevation={0}>
                    <Link to={``} style={{textDecoration: "none", color:"#42a5f5"}}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.newmedia}
                        image={section.image}
                        title="Contemplative Reptile"
                        label="asdasdasd"
                    />
                    <Typography gutterBottom variant="subtitle1" component="h2">
                        {section.title}
                    </Typography>
                    </CardActionArea>
                    </Link>
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