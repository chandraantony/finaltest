import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import { fetchCategory } from '../_action/categoryAction'
import { OutlinedInput } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


class CreateEventBody extends Component {
    constructor(){
        super();          
        this.state ={
          show: '',
          username : '',
          password : '',
          category: 'Select Category'
         
        }
        console.log(this.state.login)
      }      
      handleChange = (event) => {
        this.setState({
          category: event.target.value
        })
      }



    render() {
        
        return (
            <Container maxWidth="sm" style={{marginTop :"50pt", marginBottom :"100pt"}}>
              <Typography variant="h4" style={{color:"#42a5f5"}}><b>Add Event</b></Typography>
              <br/>
                <form  noValidate autoComplete="off">
                <TextField
                    id="outlined-secondary"
                    label="Title"
                    variant="outlined"
                    color="primary"
                    fullWidth
                />
                <br/>
                <br/>
                <Select
                        id="demo-simple-select"
                        fullWidth
                        value={this.state.category}  
                        variant="outlined"
                        onChange={this.handleChange}
                        >
                        {this.props.menu.map(section => ( 
                        <MenuItem value={section.id}>{section.id} {section.name}</MenuItem>
                        ),)}        

                </Select>
                <br/>
                <br/>
                <TextField
                    id="outlined-secondary"
                    label="Image URL"
                    variant="outlined"
                    color="primary"
                    fullWidth
                />
                <br/>
                <br/>
                <TextField
                    id="outlined-secondary"
                    label="Address"
                    variant="outlined"
                    color="primary"
                    fullWidth
                />
                <br/>
                <br/>
                <TextField
                    id="outlined-secondary"
                    label="Description"
                    variant="outlined"
                    color="primary"
                    fullWidth
                />
                <br/>
                <br/>
                <TextField
                    id="outlined-secondary"
                    label="Price"
                    variant="outlined"
                    color="primary"
                    type="number"
                    fullWidth
                />
                <br/>
                <br/>
                <TextField
                id="date"
                label="Date Start"
                type="date"
                fullWidth
                defaultValue="2019-01-21"
                InputLabelProps={{
                  shrink: true,
                }}
                />
                <br/>
                <br/>
                <TextField
                id="date"
                label="Date End"
                type="date"
                defaultValue="2019-01-21"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                />
                <br/>
                <br/>
                <TextField
                    id="Phone"
                    label="Phone"
                    variant="outlined"
                    color="primary"
                    fullWidth
                />
                <br/>
                <br/>
                <TextField
                    id="Email"
                    label="Email"
                    variant="outlined"
                    color="primary"
                    fullWidth
                />
                <br/>
                <br/>

                <Button style={{color :"#42a5f5", borderColor : "#42a5f5",marginRight:"10pt"}} variant="outlined" >Tambah</Button>
                <Button style={{color :"red", borderColor : "red",marginRight:"50pt"}} type="reset" variant="outlined" >Reset</Button>
                </form>
                
            </Container >
        )
    }
}

const mapStateToProps = state => ({
    menu : state.categoryReducer.all,
    event : state.eventReducer.all
  }
)

export default connect(mapStateToProps)(CreateEventBody)