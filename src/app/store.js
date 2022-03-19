import { configureStore } from "@reduxjs/toolkit";
import playerSideReducer from "../utils/playerSideSlice";
import turnReducer from '../utils/turnSlice'
export default configureStore({
    reducer: {
        playerOneSide : playerSideReducer,
        turn: turnReducer
    }
})