const initialState = {
    all : [],
    one : []

};

const eventReducer  = (state = initialState, action) => {
    console.log();
    switch (action.type) {
        
        case 'SHOW_EVENT_FULFILLED' :
            return {
                ...state,
                all: action.payload.data
            } 
            case 'SHOW_ONE_EVENT_FULFILLED' :
                return{
                    ...state,
                    one: action.payload.data   
                }        
            default:
                return state
        }
}

export default eventReducer;