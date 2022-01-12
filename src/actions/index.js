export const actions = {
    ADD_SYMBOL: "ADD_SYMBOL",
    ERASE: "ERASE",
    ERASE_ALL:"ERASE_ALL",
    MEMORY_STORE:"MEMORY_STORE",
    MEMORY_CLEAR:"MEMORY_CLEAR",
    MEMORY_RECALL:"MEMORY_RECALL",
    EVAL:"EVAL"
};

export function addSymbol(key) {
    return {
        type: actions.ADD_SYMBOL,
        key: key,
    };
}
export function erase() {
    return {
        type: actions.ERASE,
    };
}
export function eraseAll() {
    return {
        type: actions.ERASE_ALL,
    };
}
export function memoryStore() {
    return {
        type: actions.MEMORY_STORE,
    };
}
export function memoryClear() {
    return {
        type: actions.MEMORY_CLEAR,
    };
}
export function memoryRecall() {
    return {
        type: actions.MEMORY_RECALL,
    };
}
export function evaluate() {
    return {
        type: actions.EVAL,
    };
}
