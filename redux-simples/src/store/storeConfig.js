import { createStore, combineReducers } from 'redux'
import numerosReducer from './reducers/numeros'
import nomesReducer from './reducers/nomes'

const reducers = combineReducers({

    numeros: numerosReducer,
    nomes: nomesReducer
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig