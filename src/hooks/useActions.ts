import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { ListActionCreators } from "../store/action-creator"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ListActionCreators, dispatch)
}