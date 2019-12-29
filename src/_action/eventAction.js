import { SHOW_EVENT, SHOW_ONE_EVENT } from './types';
import axios from 'axios';


export const fetchEvent = () => {
  
    return{
        type : SHOW_EVENT,
        payload : axios.get('http://localhost:5000/api/v1/events')
    }
    
}

export const fetchOneEvent = (id) => {
  
    return{
        type : SHOW_ONE_EVENT,
        payload : axios.get(`http://localhost:5000/api/v1/event/${id}`)
    }
    
}