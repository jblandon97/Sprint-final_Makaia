import React from 'react'
import notFound from '../logos/NotFoundImage.png'

const SearchNotFound = () => {
    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <img className='m-auto w-75' src={notFound} alt="loading" />
                <h1 className='my-5'>Search Not Found</h1>
            </div>
        </>
    )
}

export default SearchNotFound