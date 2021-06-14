import React from 'react'
import Search from '../UI/Search'
import Nav from '../layout/Nav'
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import Button from '../UI/Button'

const Header = () => {

    const userAuth = false;
    return (
        <header className={utilStyles.heading}>
            <div className={utilStyles.headerContainer}>
                <div>
                    <Link href="/">
                        <p className={utilStyles.logo}>
                            P
                        </p>
                    </Link>
                    
                    <Search />

                    <Nav />
                </div>

                <div className={utilStyles.accountHeadingButtons}>
                {userAuth
                    ? (
                        <> 
                        <p>Hello: Facundo</p>
                        <Button 
                            bgColor
                        >Sign out</Button>
                        </>
                    )
                    : (
                        <>
                            
                                <Button 
                                    href="/sign-in"
                                    bgColor
                                >Sign in</Button>
                            
        
                            
                                <Button
                                    href="/sign-up"
                                >Sign up</Button>
                            
                        </>
                    )
                 
                }
                </div>
 
            </div>
        </header>
    );
}
 
export default Header;