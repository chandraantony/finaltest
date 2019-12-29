import React, { Component } from 'react';
import Nav from '../layout/Nav'
import LoginNav from '../layout/LoginNav'
import setAuth from '../util/Authorization'
import ShowEventBody from '../layout/ShowEventBody'

class Home extends Component {
    render() {
        const {id} = this.props.match.params;
        const userid =  localStorage.getItem('User-Id');
        let Navigation;
        if (userid){
            Navigation = <LoginNav/>
        }else{
            Navigation = <Nav/>
        }
        return (
            <div>
                {Navigation}
                <ShowEventBody id = {id} />
            </div>
        )
    }
}


export default Home;