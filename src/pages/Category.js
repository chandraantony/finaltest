import React, { Component } from 'react'
import Nav from '../layout/Nav'
import LoginNav from '../layout/LoginNav'
import CategoryEvent from '../layout/CategoryEvent'
import Menu from '../layout/Menu'

class Category extends Component {
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
            <div>
            {Navigation}
            {NavigationBar}
            <CategoryEvent id = {id} />
            </div> 
        )
    }
}

export default  Category