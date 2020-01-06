import React, { Component } from 'react'
import Nav from '../layout/Nav'
import LoginNav from '../layout/LoginNav'
import HomeBody from '../layout/HomeBody'
import setAuth from '../util/Authorization'
import PaymentBody from '../layout/PaymentBody'
import Footer from '../layout/Footer'
import Menu from '../layout/Menu'

class Payment extends Component {
    render() {
        const id =  localStorage.getItem('User-Id');
        let Navigation;
        let NavigationBar;
        if (id){
            Navigation = <LoginNav/> 
            NavigationBar = <Menu/> 
            
        }else{
            Navigation = <Nav/>
            window.location.href='/home';
        }
        return (
            <div style={{backgroundColor:"#f2f2f2"}}>
                {Navigation}
                {NavigationBar}
                <PaymentBody></PaymentBody>
                <Footer></Footer>
            </div>
        )
    }
}

export default Payment