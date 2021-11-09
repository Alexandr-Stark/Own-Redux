export function createStore(reducer, intialState) {
    let state = reducer(intialState, {type: 'INIT'});
    const subscribers = [];
    return {
        getState() {
            return state;
        },
        dispatch(action){
            state = reducer(state, action);
            subscribers.forEach(item => item());
        },
        subscribe(callback){
            subscribers.push(callback);
        }
    };
}