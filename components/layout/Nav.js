import React from 'react'
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

const Nav = () => {
    return (
        <nav 
            className={utilStyles.nav}
        >
            <Link href="/">Home</Link>
            <Link href="/most-relevant">Most relevant</Link>
            <Link href="/new-product">New product</Link>
        </nav>
    );
}
 
export default Nav;