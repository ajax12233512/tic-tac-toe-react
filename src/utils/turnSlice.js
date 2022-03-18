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
        switchY : state => {
            state.value = 'o';
            return state;
        }  
    }
})

export const { switchX, switchY } = turnSlice.actions;

export default turnSlice.reducer