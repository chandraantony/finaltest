const initialState = {
    all : [],
    one : []

};

const categoryReducer  = (state = initialState, action) => {
    console.log();
    switch (action.type) {
        
        case 'SHOW_CATEGORY_FULFILLED' :
            return {
                ...state,
                all: action.payload.data
            }    
        case 'SHOW_ONE_CATEGORY_FULFILLED' :
            return{
                ...state,
                one: action.payload.data   
            }        
            default:
                return state
        }
}

export default categoryReducer;