import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/users/userSlice'
import  departmentSlice from "../features/departments/depsSlice";

export const store = configureStore({
    reducer: {
        usersReducer: usersReducer,
        deps: departmentSlice
    }
});