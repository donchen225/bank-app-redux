// create reducer function
export default (state, action) => {
    console.log(action);
    switch (action.type) {
        case "WITHDRAW_AMOUNT":
            return {
                ...state,
                totalAmount: state.totalAmount - action.amount
            }
        default: 
            return state
    }
}