import { createStore } from "./store.mjs";
import { rootReduces } from "./reducer.mjs";
import { actionCreator } from "./action.mjs";
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./type.mjs";

const store = createStore(rootReduces, 0);
const actionIncrement = actionCreator(COUNTER_INCREMENT);
const actionDecriment = actionCreator(COUNTER_DECREMENT);

store.subscribe(() => console.log(store.getState()));

store.dispatch(actionIncrement);
store.dispatch(actionIncrement);
store.dispatch(actionDecriment);
store.dispatch(actionDecriment);



