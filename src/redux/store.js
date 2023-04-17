import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { questionReducer } from "./question_reducer";

const rootReducer = combineReducers({
    questions : questionReducer,
})
