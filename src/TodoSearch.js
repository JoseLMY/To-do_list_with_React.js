import React from 'react'
import "./TodoSearch.css"

function TodoSearch() {
    return(
        <>
            <div className='searchContainer'>
                <input className='search' placeholder='Search...'/>
            </div>
        </>
    )
}

export {TodoSearch}