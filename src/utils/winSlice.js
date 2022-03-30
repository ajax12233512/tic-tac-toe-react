import { createSlice } from "@reduxjs/toolkit";

export const winSlice = createSlice({
    name: 'winSlice',
    initialState: {
        value: 'x'
    },
    reducers: {
        xWin : state => {
            console.log('x wins')
            state.value = 'x'
            return state;
        },
        oWin: state => {
            console.log('y wins')
            state.value = 'o'
            return state
        }
    }
})

export const { xWin, oWin } = winSlice.actions

export default winSlice.reducer;