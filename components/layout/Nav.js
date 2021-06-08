import React from 'react'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/">Most relevant</Link>
            <Link href="/">New product</Link>
        </nav>
    );
}
 
export default Nav;