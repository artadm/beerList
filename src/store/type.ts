import { IBeer } from "../modal/IBeer"



export interface ListState {
    items: IBeer[],
    loading: boolean,
    item: IBeer
}


export enum ListActionTypes {
    SET_ITEMS = 'SET_ITEMS',
    SET_ITEM = 'SET_ITEM',
    SET_LOADING = 'SET_LOADING'
}

export interface SetListAction {
    type: ListActionTypes.SET_ITEMS
    payload: IBeer[]
}

export interface SetItem {
    type: ListActionTypes.SET_ITEM
    payload: IBeer
}

export interface SetIsLoading {
    type: ListActionTypes.SET_LOADING
    payload: boolean
}


export type ListActions = SetListAction | SetIsLoading | SetItem