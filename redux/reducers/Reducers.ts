function btnValueReducer (initialState = {}, action){
    switch (action.type){
        case 'more' :
            return{
                btnValue : false
            }
        case 'less' :
            return{
                btnValue: true
            }
    }
};
export default btnValueReducer;