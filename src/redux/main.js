import { createAction, handleActions } from 'redux-actions'

const SET_FIRST_RENDER = 'main/SET_FIRST_RENDER'

export const setFirstRender = createAction(SET_FIRST_RENDER);

const initialState = {
    firstRender: false
}

const main = handleActions({
    [SET_FIRST_RENDER]: state => ({
        ...state,
        firstRender: true
    })

}, initialState);


export default main;