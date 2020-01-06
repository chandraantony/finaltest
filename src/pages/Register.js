import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import axios from 'axios';
import setAuth from '../util/Authorization'
import Dialog from '@material-ui/core/Dialog'
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close';

class Login extends Component {
    constructor(){
        super();          
        this.state ={
          login : false,
          open : false,
          salah : '',
          username : '',
          password : '',
          email : '',
          name : ''
         
        }
        console.log(this.state.login)
      }      

      openDialog = () =>{
        this.setState({
            open : true
        })
      }

      closeDialog = () => {
        this.setState({
            open :false
        })
      }

      handleChangeUser = (event) => {
        this.setState({
          username: event.target.value
        })
      }

      handleChangeEmail = (event) => {
        this.setState({
          email: event.target.value
        })
      }

      handleChangeFullname = (event) => {
        this.setState({
          name: event.target.value
        })
      }
    
      handleChangePassword = (event) => {
        this.setState({
          password: event.target.value
        })
      }

      handleSignup = (event) => {
        axios.post('http://localhost:5000/api/v1/register', {
          name : this.state.name,
          username : this.state.username,
          email: this.state.email,
          password: this.state.password
        })
        .then(res => {
          const token = res.data.token
          if(token){
            console.log(res.data.user)
            const users = res.data.user;
            localStorage.setItem('Secret-Code', token);
            localStorage.setItem('User-Id', users.id);
            localStorage.setItem('User-Mail', users.email);
            localStorage.setItem('User-Fullname', users.name);
            console.log(token)
            setAuth(token);
            window.location.href='/home';
          }else{
            console.log(res.data)
            this.setState({
              salah : 'Email Sudah Terdaftar'
            })
          }
    
        })
        .catch(err => {
          console.log(err)
        })
        event.preventDefault();
      }
      

    render() {
        return (
          <div>
            <Button variant="outlined" style={{color:"white", borderColor:"white"}} onClick={this.openDialog}><b>Sign Up</b></Button>
              <Dialog open={this.state.open} onClose={this.closeDialog}>
                <Grid
                container
                spacing={0}
                >
                <Grid container direction="row">
                    <Grid item xs={12} sm={1} style={{backgroundColor :"#880e4f"}}>

                    </Grid>
                    <Grid item xs={12} sm={10} style={{paddingBottom : "100px",paddingTop:"50px" , paddingLeft:"10pt", paddingRight:"10pt"}}>
                    <Typography variant="h4" align="center" style={{color :"#e91e63"}}><b>Sign-Up</b></Typography>
                   <p align="center"><font color="red">{this.state.salah}</font></p>
                   <form onSubmit={this.handleSignup}>
                   <TextField
                    id="outlined-full-width"
                    onChange = {this.handleChangeUser}
                    label="username"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    required
                    />
                    <TextField
                    id="outlined-full-width"
                    onChange = {this.handleChangeFullname}
                    label="fullname"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    required
                    />
                    <TextField
                    id="outlined-full-width"
                    onChange = {this.handleChangeEmail}
                    label="email"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    required
                    />
                    <TextField
                    id="outlined-full-width"
                    onChange = {this.handleChangePassword}
                    label="password"
                    type="password"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    required
                    />
                    <br/>
                    <div style={{flex: '1' , flexDirection : 'column', display : 'flex'}}>
                    <Button style={{color:"#e91e63" , borderColor : "#e91e63"}} size="large"  type="submit" variant="outlined">Sign-Up</Button>
                    </div>
                    </form>              
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <IconButton onClick={this.closeDialog}>
                        <CloseIcon />
                      </IconButton>
                    </Grid>
                </Grid>
                </Grid> 
                </Dialog>
          </div>
        )
    }
}

export default Login;