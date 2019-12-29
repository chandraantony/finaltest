import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import axios from 'axios'
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
          email : '',
          name : ''
         
        }
        console.log(this.state.login)
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
          }
    
        })
        .catch(err => {
          console.log(err)
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
                   <Typography variant="h4" align="center" style={{color :"#42a5f5"}}><b>Sign-UP</b></Typography>
                   <br/>
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
                <div style ={{flex: '1' , flexDirection : 'column', display : 'flex', textDecoration : "none"}} >
                <Button type="submit" onClick={this.handleSignup} style={{marginTop : "10pt"}} variant="outlined">Sign-Up</Button></div>
                </form>
                <Link to="/login" style ={{flex: '1' , flexDirection : 'column', display : 'flex', textDecoration : "none"}} ><Button style={{marginTop : "10pt", borderColor: "#42a5f5", color:"#42a5f5"}} variant="outlined">Sign-In</Button></Link>
                <Link to="/home" style={{textDecoration :"none"}}><Button style={{marginTop : "10pt"}}>Back HOME</Button></Link>
                </Grid>   

                </Grid> 
        )
    }
}

export default Login;