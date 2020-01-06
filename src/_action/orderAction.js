import { SHOW_ORDER, SHOW_TICKET } from './types';
import axios from 'axios';


export const fetchOrder = (id) => {
  
    return{
        type : SHOW_ORDER,
        payload : axios.get(`http://localhost:5000/api/v1/orderlist/${id}`)
    }
    
}

export const fetchTicket = (id) => {
  
    return{
        type : SHOW_TICKET,
        payload : axios.get(`http://localhost:5000/api/v1/myTicket/${id}`)
    }
    
}