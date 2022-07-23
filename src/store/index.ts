import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import { IBeer } from "../modal/IBeer";
import { ListActions, ListActionTypes, ListState } from "./type";



const initialState: ListState = {
    items: [],
    loading: true,
    item: <IBeer>{},
}

export default function ItemsReducer(state = initialState, action: ListActions) {
    switch (action.type) {
        case ListActionTypes.SET_ITEMS:
            return { ...state, items: action.payload }
        case ListActionTypes.SET_ITEM:
            return { ...state, item: action.payload }
        case ListActionTypes.SET_LOADING:
            return { ...state, loading: action.payload }
        default:
            return state
    }
}



export const store = createStore(ItemsReducer, applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch