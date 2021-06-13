import { createAction, handleActions } from 'redux-actions'

const INIT_PAGE = 'history/INIT_PAGE'
const SET_KEYWORD = 'history/SET_KEYWORD'
const SET_LIST = 'history/SET_LIST';
const SET_DATELIST = 'history/SET_DATELIST';


export const initPage = createAction(INIT_PAGE);
export const setKeyword = createAction(SET_KEYWORD);
export const setList = createAction(SET_LIST);
export const setDateList = createAction(SET_DATELIST, dateList => dateList);

const initialState = {
    list: null,
    dateList: null,
    keyword: null
}

const history = handleActions({
    [INIT_PAGE]: () => initialState,
    [SET_KEYWORD]: (state, {payload: param}) => ({
        ...state,
        keyword: param
    }),
    [SET_LIST]: (state, {payload: list}) => ({
        ...state,
        list
    }),
    [SET_DATELIST]: (state, {payload: dateList}) => ({
        ...state,
        dateList
    })

}, initialState);


export default history;