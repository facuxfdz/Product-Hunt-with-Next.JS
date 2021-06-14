import React from 'react'
import utilStyles from '../../styles/utils.module.css'

const Search = () => {
    return ( 
        <form 
            className={utilStyles.searchForm}
            action=""
        >

            <input 
                className={utilStyles.searchTextField}
                type="text"
                placeholder="Search products"
            />
            
            <button
                className={utilStyles.searchSubmit}
                type="submit"
            >Search</button>
        </form>
    );
}
 
export default Search;