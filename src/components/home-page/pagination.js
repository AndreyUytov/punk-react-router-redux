import React, {
    useState
} from 'react'
import { NavLink } from 'react-router-dom'

function generetePages (currentPage) {
    if(currentPage === 1) {
        return [1,2,3]
    } else return [currentPage - 1, currentPage, currentPage + 1]
}

function renderPrevBtn (pagesNumbers,setPages) {
    if (pagesNumbers[0] < 2) {
        return (
            <li key = 'prevBtn'>
                <button className='pagination-list__prev-btn'
                 type='button' disabled={true}
                 onClick = {() => onPrevBtnClick(pagesNumbers, setPages, false)}>
                    Prev 
                </button>
            </li>
        ) 
    } else {
        return (
            <li key = 'prevBtn'>
            <button className='pagination-list__prev-btn'
             type='button'
             onClick = {() => onPaginationBtnClick(pagesNumbers, setPages, false)}>
                Prev 
            </button>
        </li>
        )
    }
}

function renderNextBtn (pagesNumbers, setPages) {
    return (
        <li key = 'nextBtn'>
            <button className='pagination-list__prev-btn'
             type='button'
             onClick = {() => onPaginationBtnClick(pagesNumbers, setPages)}>
                Next 
            </button>
        </li>
    )
}

function onPaginationBtnClick (pagesNumbers, setPages, isNext = true) {
    let newPagesNumbers = pagesNumbers.reduce((res, cur) => {
        if (isNext) {
            res.push(cur + 1)
        } else {
            res.push(cur - 1)
        }
        return [...res]
    }, [])

    setPages(newPagesNumbers)
}

function renderPages (pageNumbers) {
    return pageNumbers.map((elem) => {
        return (
            <li key = {elem}>
                <NavLink to={'/' + elem} className='pagination-list__item'
                activeClassName="pagination-list__item--active">
                    {elem}  
                </NavLink>
            </li>
        )
    })
}

export default function Pagination (props) {
    let pagesNumbers = generetePages(props.currentPage)

    const [pages, setPages] = useState(pagesNumbers)

    return (
        <React.Fragment>
            <ul className='pagination-list'>
                {renderPrevBtn(pages, setPages)}
                {renderPages(pages)}
                {renderNextBtn(pages, setPages)}
            </ul>
        </React.Fragment>
    )
}