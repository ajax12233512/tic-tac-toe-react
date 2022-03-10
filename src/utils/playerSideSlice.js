import { createSlice } from '@reduxjs/toolkit';

export const playerSideSlice = createSlice({
    name: 'playerOneSide',
    initialState: {
        value: 'x'
    },
    reducers: {
        pickX: state => {
            state.value = 'x';
            return state
        },
        pickO: state => {
            state.value = 'o';
            return state
        }
    }
})

export const { pickX, pickO } = playerSideSlice.actions

export default playerSideSlice.reducer