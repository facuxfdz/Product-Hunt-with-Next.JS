import React, { useEffect, useState } from 'react'
import { Layout } from '../components/layout'
import { Form, Field, Submit, Errors } from '../components/UI'
import utils from '../styles/utils.module.css'
import firebase from '../firebase/Firebase'
import Router from 'next/router'

import { useDispatch } from 'react-redux'
import { createUser } from '../features/userSlice'

// Validations
import useValidate from '../hooks/useValidate'
import validateSignUp from '../validation/validateSignUp'
import { unwrapResult } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
}

const SignUp = () => {
    
    const dispatch = useDispatch()

    const [error,setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setError(null)
        }, 3000)
    },[error])
    const signUp = async () => {
        try{
            const resultAction = await dispatch(createUser({user: values,auth: firebase.firebaseAuth}))      
            
            unwrapResult(resultAction)

            setError(null)

            Router.push('/')

        }catch(err){
            setError(err.code)
            console.error('Failed to save the post\n',err)
        }
    }

    const {
        values,
        errs,
        handleSubmit,
        handleChange,
        handleBlur
    } = useValidate(INITIAL_STATE,validateSignUp,signUp)
    
    const {name,email,password} = values


    return (
        <>
            <Layout>
                <>
                    <h1 className={utils.sectionName}>Sign up</h1>
                    <Form 
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <Field>
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name"
                                placeholder="Your name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Field>

                        {errs.name && <Errors>{errs.name}</Errors>}

                        <Field>
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                id="email"
                                placeholder="Your email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Field>
                        {errs.email && <Errors>{errs.email}</Errors>}
                        <Field>
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password"
                                placeholder="Your password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Field>

                        {errs.password && <Errors>{errs.password}</Errors>}

                        {error ? <Errors>{error}</Errors> : null}

                        <Submit 
                            type="submit"
                            value="Sign up"
                        />

                    </Form>
                </>
            </Layout>
        </>
    );
}
 
export default SignUp;