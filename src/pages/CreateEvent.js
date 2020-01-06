import React, { Component } from 'react'
import Nav from '../layout/Nav'
import LoginNav from '../layout/LoginNav'
import CreateBody from '../layout/CreateEventBody'
import CreateEventBody from '../layout/CreateEventBody';
import Footer from '../layout/Footer';
import Menu from '../layout/Menu'

class CreateEvent extends Component {
    render() {
        const id =  localStorage.getItem('User-Id');
        let Navigation;
        let NavigationBar;
        if (id){
            Navigation = <LoginNav/> 
            NavigationBar = <Menu/> ;
        }else{
            Navigation = <Nav/>
            window.location.href='/home';
        }
        return (
            <div style={{backgroundColor:"#f2f2f2"}}>
            {Navigation}
            {NavigationBar}
            <CreateEventBody></CreateEventBody>
            <Footer></Footer>
            </div> 
        )
    }
}

export default CreateEvent
