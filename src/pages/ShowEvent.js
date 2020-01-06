import React, { Component } from 'react';
import Nav from '../layout/Nav'
import LoginNav from '../layout/LoginNav'
import setAuth from '../util/Authorization'
import ShowEventBody from '../layout/ShowEventBody'
import Footer from '../layout/Footer'
import Menu from '../layout/Menu'

class Home extends Component {
    render() {
        const {id} = this.props.match.params;
        const userid =  localStorage.getItem('User-Id');
        let Navigation;
        let NavigationBar;
        if (userid){
            Navigation = <LoginNav/> 
            NavigationBar = <Menu/> ;
        }else{
            Navigation = <Nav/>
            
        }
        return (
            <div style={{backgroundColor : "#f2f2f2"}}>
                {Navigation}
                {NavigationBar}
                <ShowEventBody id = {id} />
                <Footer/>
            </div>
        )
    }
}


export default Home;