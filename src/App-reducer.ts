export type StateType = {
    num: number;
    startValue: number;
    maxValue: number;
    errorNum: boolean
};
const initialState: StateType = {
    num: 0,
    startValue: 0,
    maxValue: 0,
    errorNum: false
}

export const appReducer = (state = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'ADD_COUNTER':
            if (action.payload.numCount < action.payload.maxValueCount) {
                return {...state, num: action.payload.numCount + 1}
            }
            return state
        case 'RESET_COUNTER':
            return {...state, num: action.payload.resetNum}
            case 'SAVE_SETTINGS':
            return {...state, num: action.payload.startValueSettings}
            case 'GET_SETTINGS':
            return {...state, num: action.payload.}
        case 'ERROR_COUNTER':
            return {...state, errorNum: action.payload.error}
        default:
            return state;
    }
}

export const addCounterAC = (payload: {numCount: number, maxValueCount: number} ) => {
    return {
        type: 'ADD_COUNTER',
        payload
    } as const
}
export const resetCounterAC = (payload: {resetNum: number}) => {
    return {
        type: 'RESET_COUNTER',
        payload
    } as const
}
export const saveSettingsAC = (payload: {startValueSettings: number}) => {
    return {
        type: 'SAVE_SETTINGS',
        payload
    } as const
}
export const getSettingsAC = (payload: {start: string | null, max: string | null}) => {
    return {
        type: 'GET_SETTINGS',
        payload
    } as const
}
export const errorAC = (payload: {error: boolean}) => {
    return {
        type: 'ERROR_COUNTER',
        payload
    } as const
}
export type addCounterAT = ReturnType<typeof addCounterAC>
export type resetCounterAT = ReturnType<typeof resetCounterAC>
export type saveSettingsAT = ReturnType<typeof saveSettingsAC>
export type getSettingsAT = ReturnType<typeof getSettingsAC>
export type errorAT = ReturnType<typeof errorAC>
type ActionsType = addCounterAT | resetCounterAT | saveSettingsAT | errorAT | getSettingsAT