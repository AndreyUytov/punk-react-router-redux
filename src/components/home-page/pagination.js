import React, {
    useState,
    useReducer
} from 'react'
import { NavLink } from 'react-router-dom'

function generetePages (currentPage) {
    if(currentPage === 1) {
        return [1,2,3]
    } else return [currentPage - 1, currentPage, currentPage + 1]
}

function renderScrollBtn (pagesNumbers, setPages, isNext = true) {
    return (
        <li key = {isNext ? 'nextBtn' : 'prevBtn'}>
            <button className={isNext ? 'pagination-list__next-btn' : 'pagination-list__prev-btn'}
             type='button'
             disabled = {isNext ? false : 
             (pagesNumbers[0] < 2 ? true : false)}
             onClick = {() => onPaginationBtnClick(pagesNumbers, setPages, isNext)}>
                {isNext ? 'Next' : 'Prev'}
            </button>
        </li>
    )
}

function onPaginationBtnClick (pagesNumbers, setPages, isNext = true) {
    let newPagesNumbers = pagesNumbers.map((item) => {
        return isNext ? item + 1 : item - 1   
    })

    setPages(newPagesNumbers)
}

function renderPages (pageNumbers, dispatch) {
    return pageNumbers.map((elem) => {
        return (
            <li key = {elem}>
                <NavLink to={'/' + elem} className='pagination-list__item'
                activeClassName="pagination-list__item--active"
                onClick = {() => {dispatch({type: 'SET_PAGE', payload: {page: elem}})}}
                >
                    {elem}  
                </NavLink>
            </li>
        )
    })
}

export default function Pagination (props) {
    let pagesNumbers = generetePages(props.page)
    const [pages, setPages] = useState(pagesNumbers)

    let {dispatch} = props

    return (
        <React.Fragment>
            <ul className='pagination-list'>
                {renderScrollBtn(pages, setPages, false)}
                {renderPages(pages,dispatch)}
                {renderScrollBtn(pages, setPages, true)}
            </ul>
        </React.Fragment>
    )
}