import React, { Component } from 'react';
import Nav from '../layout/Nav'
import LoginNav from '../layout/LoginNav'
import HomeBody from '../layout/HomeBody'
import setAuth from '../util/Authorization'
import Footer from '../layout/Footer'
import Menu from '../layout/Menu'
class Home extends Component {
    

    render() {
        const id =  localStorage.getItem('User-Id');
        let Navigation;
        let NavigationBar;
        if (id){
            Navigation = <LoginNav/> 
            NavigationBar = <Menu/> ;
        }else{
            Navigation = <Nav/>
        }
        return (
            <div style={{backgroundColor:"#f2f2f2"}}>
                {Navigation}
                {NavigationBar}
                <HomeBody></HomeBody>
                <Footer></Footer>
            </div>
        )
    }
}


export default Home;