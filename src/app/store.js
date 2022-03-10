import { configureStore } from "@reduxjs/toolkit";
import playerSideReducer from "../utils/playerSideSlice";
export default configureStore({
    reducer: {
        playerOneSide : playerSideReducer
    }
})