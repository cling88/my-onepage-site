import { combineReducers } from 'redux'
// redux
import history from './history'
import main from './main'

const rootReducer = combineReducers({
    history,
    main
})

export default rootReducer