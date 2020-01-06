const initialState = {
    all : [],
    one : []

};

const userReducer  = (state = initialState, action) => {
    console.log();
    switch (action.type) {
        
            case 'SHOW_USER_FULFILLED' :
                return{
                    ...state,
                    one: action.payload.data   
                }        
            default:
                return state
        }
}

export default userReducer;