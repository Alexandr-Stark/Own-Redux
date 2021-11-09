import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./type.mjs";


export function rootReduces(state, action) {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return state + 1;
        case COUNTER_DECREMENT:
            return state - 1;
        default:
            return state;
    }
}