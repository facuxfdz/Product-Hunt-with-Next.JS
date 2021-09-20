import React from 'react'
import { Search, Button } from '../UI'
import { Nav } from '../layout'
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

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
                                    to="/sign-in"
                                    bgColor
                                >Sign in</Button>
                            
        
                            
                                <Button
                                    to="/sign-up"
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