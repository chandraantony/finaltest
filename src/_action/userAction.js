import { SHOW_USER } from './types';
import axios from 'axios';


export const fetchOneUser = (id) => {
  
    return{
        type : SHOW_USER,
        payload : axios.get(`http://localhost:5000/api/v1/user/${id}`)
    }
    
}