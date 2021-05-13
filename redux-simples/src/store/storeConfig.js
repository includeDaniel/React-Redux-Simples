import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numeros: function (state, action) {

        switch (action.type) {
            case 'NUM_MIN_ALTERAD0':
                return {
                    ...state,
                    min: action.payload
                }
            default:
                return {
                    min: 5,
                    max: 15
                }
        }


    },
    nomes: function (state, action) {
        console.log("Reducer de Nomes...")
        console.log(state, ' ', action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig