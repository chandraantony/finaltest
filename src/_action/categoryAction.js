import { SHOW_CATEGORY, SHOW_ONE_CATEGORY} from './types';
import axios from 'axios';


export const fetchCategory = () => {
  
    return{
        type : SHOW_CATEGORY,
        payload : axios.get('http://localhost:5000/api/v1/categories')
    }
    
}

export const fetchOneCategory = (id) => {
  
    return{
        type : SHOW_ONE_CATEGORY,
        payload : axios.get(`http://localhost:5000/api/v1/event/category/${id}`)
    }
    
}
