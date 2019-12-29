import React, { Component } from 'react'
import Nav from '../layout/Nav'
import LoginNav from '../layout/LoginNav'
import CategoryEvent from '../layout/CategoryEvent'

class Category extends Component {
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
            <CategoryEvent id = {id} />
            </div> 
        )
    }
}

export default  Category