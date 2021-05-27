
const initialState = {
    min: 7,
    max: 31
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    console.log("Reducer de Numeros...")
    console.log(state, ' ', action)
    switch (action.type) {
        case 'NUM_MIN_ALTERADO':
            return {
                ...state,
                min: action.payload
            }
        case 'NUM_MAX_ALTERADO':
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}
