import PropTypes from 'prop-types'
import {Page} from "../Page";
import {getPhotosAction, setYearAction} from "../../redux/actions/pageActions";
import {useDispatch, useSelector} from "react-redux";

export function PageContainer(props) {

    let page = useSelector(state => state.page);
    let dispatch = useDispatch()
    let setYear = (year) => {
        dispatch(setYearAction(year))
    }
    let getPhotos = (year) => {
        dispatch(getPhotosAction(year))
    }

    return <Page
        page ={page}
        getPhotos={getPhotos}
        setYear={setYear}/>

}




