import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
    name: 'result',
    initialState: {
        name: null,
        userId: []
    },
    reducers: {
        setuserId : (state,action)=>{
            state.userId=  action.payload
        }
    }
})

export const {setuserId} =resultReducer.actions
export default resultReducer.reducer