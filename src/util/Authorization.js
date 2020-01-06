import axios from 'axios';


export default function setAuth(token){
    if (token){
        axios.defaults.headers.common['Authoriztion'] = `Baerer ${token}`;
        console.log('adaanjeng')
    }else{
        delete axios.defaults.headers.common['Authoriztion'];
        window.location.href='/home';
    }
}