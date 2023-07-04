import React, { useContext } from 'react'
import {TodoContext} from "../TodoContext"
import "./TodoSearch.css"

function TodoSearch(){
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext)
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