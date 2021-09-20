import { 
    createSlice, 
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const userAdapter = createEntityAdapter({
    selectId: user => user.email
})

export const createUser = createAsyncThunk('users/createUser', async createData => {
    const { user, auth } = createData
    const { name, email, password } = user
    const newUser = await  createUserWithEmailAndPassword(auth,email,password)
    await updateProfile(newUser.user, {
        displayName: name
    })
    return {displayName: newUser.user.displayName, email: newUser.user.email}
})


const userSlice = createSlice({
    name: 'user',
    initialState: userAdapter.getInitialState({
        status: 'idle',
        error: null
    }),
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createUser.pending, (state,action) => {
            state.status = 'loading'
        })
        builder.addCase(createUser.fulfilled,(state,action) => {
            state.status = 'succeeded'
            const {displayName, email} = action.payload
            userAdapter.addOne(state,{name: displayName, email})
        })
        builder.addCase(createUser.rejected, (state,action) => {
            state.error = true
        })
     
    }
})

export default userSlice.reducer