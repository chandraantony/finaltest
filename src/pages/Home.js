import React, { Component } from 'react';
import Nav from '../layout/Nav'
import LoginNav from '../layout/LoginNav'
import HomeBody from '../layout/HomeBody'
import setAuth from '../util/Authorization'

class Home extends Component {
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
                <HomeBody></HomeBody>
            </div>
        )
    }
}


export default Home;