import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "./cartSlice";
import sagaReducer from "./apidata/reducerSaga";
import createSagaMiddleware from "redux-saga";
import productSaga from "./apidata/saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    cart: cartSlice,
    product:sagaReducer
})


export default configureStore({
    reducer : rootReducer,
    middleware:()=>[sagaMiddleware]

})

sagaMiddleware.run(productSaga)