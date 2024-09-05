const reducer = (state, action) => {
    console.log(state);//this is equal to "count"
    console.log(action);
    if (action.type == "INC") {
        state++;
    }
    else if (action.type == "DEC") {
        if (state == 0) {
            return state;
        }
        state--;
    }
    else if (action.type == "INCBYFIVE") {
        state=state+action.payload;
    }
    return state;
}

export default reducer;