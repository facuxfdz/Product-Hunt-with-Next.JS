import React, { useEffect, useState } from 'react'

const useValidate = (initialState,validate,cb) => {
    
    const [values,setValues] = useState(initialState)
    const [errs,setErrs] = useState({})
    const [submitForm,setSubmitForm] = useState(false)

    useEffect(() => {
        if(submitForm){
            const thereIsErrors = Object.keys(errs).length !== 0
            if(!thereIsErrors){
                cb() // fn = Function executes in the component
            }
            setSubmitForm(false)
        }
    },[errs])

    // Handle functions
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleBlur = () => {
        const validationErrs = validate(values)
        setErrs(validationErrs)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const validationErrs = validate(values)

        setErrs(validationErrs)

        setSubmitForm(true)
    }
    
    return {
        values,
        errs,
        handleSubmit,
        handleChange,
        handleBlur
    }
}
 
export default useValidate;