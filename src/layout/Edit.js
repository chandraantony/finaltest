import React, { Component } from 'react'
import { Button, Dialog, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import axios from 'axios'

class Edit extends Component {
    constructor(){
        super();
        this.state = {
            open :false,
            name : " ",
            email : " ",
            fullname : " ",
            image : " ",
            phone : " ",
            dateOfBirth : ""
        }
    }

    handleOpen = () => {
        this.setState({
            open : true
        })
    }

    handleClose = () => {
        this.setState({
            open : false
        })
    }
    
    onChangeName = (event) => () =>{

    }

    onSubmit = (event) => {
        const id = localStorage.getItem('User-Id');
        console.log(id);
        const name = this.state.fullname;
        console.log(name)
        axios.put(`http://localhost:5000/api/v1/update/${id}`, {
            name : this.state.fullname,
            phone : this.state.phone,
            dateBirth : this.state.dateOfBirth,
            email : this.state.email,
            image : this.state.image,
            username : this.state.name
          })
          .then(res => {
            console.log('sucess')
          })

    }

    componentDidMount(){

    }

    render() {

        return (
            <div>
                <Button style={{color : "white", backgroundColor:"#e91e63"}} onClick={this.handleOpen}>Edit</Button>
                <Dialog open={this.state.open} onClose={this.handleClose} maxWidth="sm"  fullWidth>
                    <Grid container direction="row">
                        <Grid item xs={12} sm={1} style={{backgroundColor:"#880e4f"}}>
                        </Grid>
                        <Grid item xs={12} sm={10} style={{paddingBottom : "30px",paddingTop:"20px" , paddingLeft:"10pt", paddingRight:"10pt", overflow : "hidden"}}>
                        <Typography variant="h4" align="center" style={{color :"#e91e63"}}><b>Edit</b></Typography>
                        <form onSubmit={this.onSubmit}>
                            <TextField
                            id="outlined-full-width"
                            label="username"
                            fullWidth
                            margin="normal"
                            value={this.state.name === " " ? this.props.user.username : this.state.name}
                            onChange= {e => this.setState({ name: e.target.value })}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            required
                            />
                            <TextField
                            id="outlined-full-width"
                            label="Email"
                            value={this.state.email === " " ? this.props.user.email : this.state.email}
                            onChange= {e => this.setState({ email: e.target.value })}
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
                            label="fullname"
                            value={this.state.fullname === " " ? this.props.user.name : this.state.fullname}
                            onChange= {e => this.setState({ fullname: e.target.value })}
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
                            value={this.state.image === " " ? this.props.user.image : this.state.image}
                            onChange= {e => this.setState({ image: e.target.value })}
                            label="avatar"
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
                            label="phone"
                            value={this.state.phone === " " ? this.props.user.phone : this.state.phone}
                            onChange= {e => this.setState({ phone : e.target.value })}
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
                            type = "datetime-local"
                            label="birth date"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            required
                            />
                        <div style={{flex: '1' , flexDirection : 'column', display : 'flex'}}>
                            <Button style={{color:"#e91e63" , borderColor : "#e91e63"}} size="large"  type="submit" variant="outlined">edit</Button>
                        </div>
                        </form>
                        </Grid>
                        <Grid item xs={12} sm={1} align="right">
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

const mapStateToProps = state => ({
    user : state.userReducer.one
  }
)
export default connect(mapStateToProps)(Edit)