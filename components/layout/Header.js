import React from 'react'
import Search from '../UI/Search'
import Nav from '../layout/Nav'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <p>P</p>

                    <Search />

                    <Nav />
                </div>

                <div>
                    <p>Hello: Facundo</p>

                    <button type="button">Sign out</button>

                    <Link href="/">Sign in</Link>
                    <Link href="/">Sign up</Link>
                </div>
            </div>
        </header>
    );
}
 
export default Header;