import { configureStore } from "@reduxjs/toolkit";
import playerSideReducer from "../utils/playerSideSlice";
import turnReducer from '../utils/turnSlice'
console.log(playerSideReducer.reducer)
export default configureStore({
    reducer: {
        playerOneSide : playerSideReducer,
        turn: turnReducer
    }
})