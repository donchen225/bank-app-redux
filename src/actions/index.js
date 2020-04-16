import { store } from "../store";

// create function to dispatch action, takes in an event
export const dispatchButtonAction = (e) => {
    const amount = e.target.dataset.amount;
    store.dispatch(withdrawAmount(amount));
}

// create action creator for those with withdrawAmount action type
const withdrawAmount = (amount) => {
    return {
        type: "WITHDRAW_AMOUNT",
        amount: amount
    }
}
