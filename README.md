## Refactor App's state to be managed by Redux & handle withdrawl actions to actually deplete the user's balance

// 1. Install Redux
// 2. Remove component state from App
// 3. Create directories for all major actors: store, actions, reducers
    // In each folder, create an index.js (entry point)
// 5. Create Redux Store in its index.js
    // import createStore factory function from redux
    // invoke createStore() to create store, passing in the reducer initial state
// 6. Create Reducer function in its index.js
    // export a function that takes in the state and an action 
    // for now, return default state
// 7. Create function to dispatch an action 
    // onClick of button, invoke store.dispatch(), taking in the action
    // create action creater function to create similar actions (keep code DRY) 
    // use e.target.dataset.amount to get data attribute set on button
// 8. Refactor Reducer function to handle withdrawal actions
    // use switch statement to check for action type
    // create a new copy of state and update it differently depending on action type
    // return the state 
// 9. Subscribe to store updates
    // Wrap the line that renders entire application within a function object 
    // Invoke store.subscribe() on the render function object so that whenever there is a successful update to store, App will be re-rendered w/ new state values
