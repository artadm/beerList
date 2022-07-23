import { ListActions, ListActionTypes, SetListAction, SetIsLoading, SetItem } from "./type";
import { AppDispatch } from './index'
import axios from 'axios'
import { IBeer } from "../modal/IBeer";

export const ListActionCreators = {
    setItems: (payload: IBeer[]): SetListAction => ({ type: ListActionTypes.SET_ITEMS, payload }),
    fetchItems: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(ListActionCreators.setIsLoading(true))
            const response = await axios.get<IBeer[]>('https://api.punkapi.com/v2/beers/')

            dispatch(ListActionCreators.setItems(response.data))
            dispatch(ListActionCreators.setIsLoading(false))
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(ListActionCreators.setIsLoading(false))
        }
    },
    fetchCurrentItem: (id: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch(ListActionCreators.setIsLoading(true))
            const response = await axios.get<IBeer[]>(`https://api.punkapi.com/v2/beers/${id}`)
            dispatch(ListActionCreators.setIsLoading(false))
            dispatch(ListActionCreators.setItem(response.data[0]))


        } catch (e) {
            console.log(e);
        } finally {
            dispatch(ListActionCreators.setIsLoading(false))
        }
    },
    setIsLoading: (loading: boolean): SetIsLoading => {
        return { type: ListActionTypes.SET_LOADING, payload: loading }
    },
    setItem: (item: IBeer): SetItem => {
        return { type: ListActionTypes.SET_ITEM, payload: item }
    }
}