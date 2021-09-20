export default function validateSignUp(values){
    let errs = {}
    const emailRe = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    if(!values.name){
        errs.name = "Name is required"
    }
    
    if(!values.email){
        errs.email = "Email is required"
    }else if(!emailRe.test(values.email)){
        errs.email = "Invalid email"
    }

    if(!values.password){
        errs.password = "Password is required"
    }else if(values.password.length < 6){
        errs.password = "Password must be at least 6 characters long"
    }

    return errs
}