const initialState = {
    all : [],
    one : []

};

const orderReducer  = (state = initialState, action) => {
    console.log();
    switch (action.type) {       
            case 'SHOW_ORDER_FULFILLED' :
                return{
                    ...state,
                    one: action.payload.data  
                }        
            case 'SHOW_TICKET_FULFILLED' :
                return{
                    ...state,
                    all: action.payload.data  
                }        
            default:
                return state
        }
}

export default orderReducer;