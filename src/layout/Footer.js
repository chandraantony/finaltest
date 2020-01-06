import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';




class Footer extends Component {
    render() {
        return (
          <div style={{backgroundColor: "#880e4f", color : "white", paddingRight : "100px", paddingLeft : "100px", paddingTop:"50px", paddingBottom : "20px"}}>
            <Grid container spacing={2} >
              <Grid item xs={12} sm={4}>
                <Typography variant="h5">
                  <b>Dumb.Tick</b>
                </Typography>
                <Typography style={{paddingRight: "50pt"}} variant="caption">
                  Dumb.Tick is web based platform that provides ticket for various event around sport, music, science, programming and etc.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography style={{paddingLeft: "50pt"}} variant="body1">
                  <b>Links</b>
                </Typography>
                <Typography style={{paddingLeft: "50pt"}} variant="body1">
                  About Us
                </Typography>
                <br/>
                <Typography style={{paddingLeft: "50pt"}} variant="body1">
                  <b>Follow us On :</b>
                </Typography>
                <br/>
                <Typography style={{paddingLeft: "50pt"}} variant="body1">
                  <InstagramIcon /> Dumb.Tick
                </Typography>
                <Typography style={{paddingLeft: "50pt"}} variant="body1">
                  <TwitterIcon /> Dumb.Tick
                </Typography>
                <br/>
                <p align="center" variant="caption">
                  copy right. @chandra.ant
                </p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography style={{paddingLeft: "50pt"}} variant="body1">
                  <b>Have Question ?</b>
                </Typography>
                <Typography style={{paddingLeft: "50pt"}} variant="caption">
                  <b>Dumb.Tick</b>Dumb.Tick
                </Typography>
                <Typography style={{paddingLeft: "50pt"}} variant="body1">
                  Email : Chandra.ant@gmail.com
                </Typography>
              </Grid>
          </Grid>
          </div>
        )
    }
}

export default Footer;