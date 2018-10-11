export default ({ dispatch }) => next => action => {
    // Check if promise on action payload
    
    // If not, send to next
    if(!action.payload || !action.payload.then) {
        return next(action);
    }
    // If, wait for it to resolve, create a new action with that data and dispatch it
    action.payload.then(function (response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
};