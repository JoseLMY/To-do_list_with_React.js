import React from 'react'
import "./TodoSearch.css"

function TodoSearch({
    searchValue,
    setSearchValue
}) {
    return(
        <>
            <div className='searchContainer'>
                <input 
                    className='search' 
                    placeholder='Search:'
                    value={searchValue}
                    onChange={(event)=>{
                        setSearchValue(event.target.value);
                    }}  
                />
            </div>
        </>
    )
}

export {TodoSearch}