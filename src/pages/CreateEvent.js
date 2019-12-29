import React, { Component } from 'react'
import Nav from '../layout/Nav'
import LoginNav from '../layout/LoginNav'
import CreateBody from '../layout/CreateEventBody'
import CreateEventBody from '../layout/CreateEventBody';

class CreateEvent extends Component {
    render() {
        const id =  localStorage.getItem('User-Id');
        let Navigation;
        if (id){
            Navigation = <LoginNav/>
        }else{
            Navigation = <Nav/>
        }
        return (
            <div>
            {Navigation}
            <CreateEventBody></CreateEventBody>
            </div> 
        )
    }
}

export default CreateEvent
