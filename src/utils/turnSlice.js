import { createSlice } from "@reduxjs/toolkit";

export const turnSlice = createSlice({
    name: 'sideSlice',
    initialState: {
        value: 'x'
    },
    reducers: {
        switchX : state => {
            state.value = 'x';
            return state;
        },
        switchO : state => {
            state.value = 'o';
            return state;
        }  
    }
})

export const { switchX, switchO } = turnSlice.actions;

export default turnSlice.reducer