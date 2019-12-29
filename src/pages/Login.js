import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import axios from 'axios';
import setAuth from '../util/Authorization'


class Login extends Component {
    constructor(){
        super();          
        this.state ={
          login : false,
          open : false,
          salah : '',
          username : '',
          password : '',
         
        }
        console.log(this.state.login)
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
          window.location.href='/home';
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
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                >
                    
                <Grid item xs={4}>
                   <Typography variant="h4" align="center" style={{color : "#42a5f5"}}><b>Sign-In</b></Typography>
                   <br/>
                   <center><font size="10pt" color="red">{this.state.salah}</font></center>
                   <form>
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
                <div style ={{flex: '1' , flexDirection : 'column', display : 'flex', textDecoration : "none"}} >
                <Button type="submit" onClick={this.handleLogin} style={{marginTop : "10pt"}} variant="outlined">Sign-In</Button>
                </div>
                </form>
                <Link to="/register" style ={{flex: '1' , flexDirection : 'column', display : 'flex', textDecoration : "none"}} ><Button style={{marginTop : "10pt", borderColor: "#42a5f5", color:"#42a5f5"}} variant="outlined">Sign-Up</Button></Link>
                <Link to="/home" style={{textDecoration :"none"}}><Button style={{marginTop : "10pt"}}>Back HOME</Button></Link>
                </Grid>   

                </Grid> 
        )
    }
}

export default Login;