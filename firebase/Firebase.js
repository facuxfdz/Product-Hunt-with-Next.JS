import firebaseConfig from './firebaseConfig'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

class Firebase {
        
    constructor() {
        
        initializeApp(firebaseConfig)
        this.auth = getAuth()
    }

    get firebaseAuth(){
        return this.auth
    }

}

const firebase = new Firebase()

export default firebase