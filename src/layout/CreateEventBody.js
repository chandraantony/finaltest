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
import axios from 'axios'


class CreateEventBody extends Component {
    constructor(){
        super();          
        this.state ={
          show: '',
          username : '',
          password : '',
          category: '',
          title:'',
          image:'',
          address:'',
          desc:'',
          price: 0,
          dateStart : '',
          dateEnd:''
         
        }
        console.log(this.state.login)
      }      
      handleChange = (event) => {
        this.setState({
          category: event.target.value
        })
      }

      onSubmit = ()=>{
        axios.post('http://localhost:5000/api/v1/addEvent', {
          user_id: localStorage.getItem('User-Id'),
          category_id : this.state.category,
          title :this.state.title,
          date_start : this.state.dateStart,
          description : this.state.desc,
          date_finish : this.state.dateEnd,
          address : this.state.address,
          price : this.state.price,
          image : this.state.image
  
        })
        .then(res => {
           window.location ="/home"
        })
        .catch(err => {
          console.log(err);
        })
      } 



    render() {
        return (
            <Container maxWidth="sm" style={{marginTop :"50pt", marginBottom :"100pt"}} >
              <Typography variant="h4" style={{color:"#e91e63"}}><b>Add Event</b></Typography>
              <hr size="5" color="#e91e63" style={{backgrounColor:"#e91e63"}}/>
              <br/>
                <form  onSubmit={this.onSubmit}>
                <TextField
                    id="outlined-secondary"
                    label="Title"
                    variant="outlined"
                    color="primary"
                    value={this.state.title}
                    onChange ={e => this.setState({ title: e.target.value })}
                    fullWidth
                    required
                />
                <br/>
                <br/>
                <Select
                        id="demo-simple-select"
                        fullWidth
                        value={this.state.category}  
                        variant="outlined"
                        onChange={this.handleChange}
                        required
                        >
                        {this.props.menu.map(section => ( 
                        <MenuItem key={section.id} value={section.id}>{section.id} {section.name}</MenuItem>
                        ),)}        

                </Select>
                <br/>
                <br/>
                <TextField
                    id="outlined-secondary"
                    label="Image"
                    variant="outlined"
                    type="file"
                    value={this.state.image}
                    onChange={e => this.setState({ image: e.target.value })}
                    color="primary"
                    fullWidth
                    required
                />
                <br/>
                <br/>
                <TextField
                    id="outlined-secondary"
                    label="Address"
                    variant="outlined"
                    color="primary"
                    value={this.state.address}
                    onChange={e => this.setState({ address: e.target.value })}
                    fullWidth
                    required
                />
                <br/>
                <br/>
                <TextField
                    id="outlined-secondary"
                    label="Description"
                    variant="outlined"
                    value={this.state.desc}
                    onChange={e => this.setState({ desc: e.target.value })}
                    color="primary"
                    fullWidth
                    required
                />
                <br/>
                <br/>
                <TextField
                    id="outlined-secondary"
                    label="Price"
                    variant="outlined"
                    value={this.state.price}
                    onChange={e => this.setState({ price: e.target.value })}
                    color="primary"
                    type="number"
                    fullWidth
                />
                <br/>
                <br/>
                <TextField
                id="date start"
                label="Date Start"
                type="datetime-local"
                fullWidth
                value={this.state.dateStart}
                onChange={e => this.setState({ dateStart: e.target.value })}
                InputLabelProps={{
                  shrink: true,
                }}
                />
                <br/>
                <br/>
                <TextField
                id="date finish"
                label="Date End"
                type="datetime-local"
                value={this.state.dateEnd}
                onChange={e => this.setState({ dateEnd: e.target.value })}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                />
                <br/>
                <br/>

                <Button type="submit" style={{color :"#e91e63", borderColor :"#e91e63",marginRight:"10pt"}} variant="outlined" >Add</Button>
                <Button style={{marginRight:"50pt"}} type="reset" variant="outlined" >Reset</Button>
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