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
          show : false,
         
        }
        console.log(this.state.login)
      }      
      
      handleClose = () => {
        this.setState({
          open : false,
          salah : ''
        })
      }
      OpenLogin = () => {
        this.setState({
          open : true
        })
      }

      showPassword  = () =>{
        this.setState(
          {
            show : !this.state.show
          }
        )
      }

      handleChangeUser = (event) => {
        this.setState({
          username: event.target.value
        })
      }
    
      handleChangePassword = (event) => {
        this.setState({
          password: event.target.value
        })
      }

      handleLogin = (event) => {
        axios.post('http://localhost:5000/api/v1/login', {
          username: this.state.username,
          password: this.state.password
        })
        .then(res => {
          const token = res.data.token;
          console.log(token);
          if(token){
          const users = res.data.user;
          localStorage.setItem('Secret-Code', token);
          localStorage.setItem('User-Id', users.id);
          localStorage.setItem('User-Mail', users.email);
          localStorage.setItem('User-Fullname', users.name);
          setAuth(token);
          window.location.reload();
          }else{
            this.setState({
              salah : 'Password or Email wrong'
            })
          }
    
        })
        .catch(err => {
          console.log(err);
        })
        event.preventDefault();
      }
    

    render() {
        return (
          <div>
          <Button onClick={this.OpenLogin} style={{color:'white'}}><b>Sign In</b></Button>
            <Dialog open={this.state.open} onClose={this.handleClose} maxWidth="sm" fullWidth>
                <Grid
                container
                spacing={0}
                direction="row"
                >
                <Grid item xs={12} sm={1} style={{backgroundColor :"#880e4f"}}>
                </Grid>
                <Grid item xs={12} sm={10}  style={{paddingBottom : "100px",paddingTop:"50px" , paddingLeft:"10pt", paddingRight:"10pt"}}>
                  <br></br>
                   <Typography variant="h4" align="center" style={{color : "#e91e63"}}><b>Sign-In</b></Typography>  
                   <br/>
                   <form onSubmit={this.handleLogin} >
                   <center><font size="10pt" color="red">{this.state.salah}</font></center>
                    <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-user">User</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-user"
                      type= 'text'
                      onChange = {this.handleChangeUser}
                      labelWidth={70}
                      required
                   /> 
                    </FormControl>
                    <br/>
                    <br/>
                    <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type= {this.state.show ? 'text' : 'password'}
                      onChange = {this.handleChangePassword}
                   
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.showPassword}
                            onMouseDown={this.showPassword}
                            edge="end"
                          >
                            <Visibility />
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    required/>     
                    </FormControl>    
                    <br/>
                    <br/>
                    <div style={{flex: '1' , flexDirection : 'column', display : 'flex'}}>
                    <Button style={{color:"#e91e63" , borderColor : "#e91e63"}} size="large"  type="submit" variant="outlined">Sign-In</Button>
                    </div>
                    </form>
                </Grid> 
                <Grid item xs={12} sm={1}>
                    <IconButton onClick={this.handleClose}>
                       <CloseIcon />
                    </IconButton>
                </Grid>  
                </Grid> 
                </Dialog>  
          </div>
        )
    }
}

export default Login;