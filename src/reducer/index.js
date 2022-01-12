import { actions } from '../actions';
import evaluateur from './evaluateur';
export const defaultState = {
    expression:"",
    memory:null
}

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case actions.ADD_SYMBOL:
            return {...state, expression: state.expression + action.key };
        case actions.ERASE:
            return {...state,expression: state.expression.substring(0,(state.expression.length-1))};
        case actions.ERASE_ALL:
            return {...state,expression: ""};
        case actions.MEMORY_STORE:
            const result_memory = evaluateur(state.expression)
            return {...state,memory: result_memory};
        case actions.MEMORY_CLEAR:
            return {...state,memory: null};
        case actions.MEMORY_RECALL:
            return {...state,expression: state.expression + state.memory};
        case actions.EVAL:
            const result_eval = evaluateur(state.expression)
            return {...state,expression: result_eval};
        default:
            return state;
    }
}