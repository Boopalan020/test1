// 4. Create a store that invokes a reducer for the state change.

import { createStore } from 'redux'
import { nameReducer } from './Details/detailReducer'


const store = createStore(nameReducer)

export default store;