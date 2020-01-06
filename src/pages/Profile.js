import React, { Component } from 'react'
import Nav from '../layout/Nav'
import LoginNav from '../layout/LoginNav'
import setAuth from '../util/Authorization'
import Footer from '../layout/Footer'
import ProfileBody from '../layout/ProfilleBody'
import Favorite from '../layout/Favorite'
import Menu from '../layout/Menu'

class Profile extends Component {
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
            <ProfileBody/>
            <Favorite/>
            <Footer/>
            </div>
        )
    }
}

export default Profile
