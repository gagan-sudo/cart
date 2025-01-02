import { call, put, select, take, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_DATA, GET_DATA_BY_CALL, GET_DATA_BY_FORK, GET_INTERNAL_STATE, HELLO, SET_DATA, SET_DATA_BY_CALL, SET_DATA_BY_FORK } from "./constants";
import Api from "./axios";
// const API='https://dummyjson.com'



function* getApiData(){
    
    let data = yield fetch('https://dummyjson.com/products/search?q=phone')
   
    // let data = yield fetch('https://dummyjson.com/products?limit=10&skip=2&select=Apple,price')
    data = yield data.json()
    yield put({type:SET_DATA,payload:data})
    
}
function* getApiDataByCall(){
    const products = yield  call(Api,'watch')
    
    
    yield put({type:SET_DATA_BY_CALL,payload:products.data})
    
}
function* getApiDataByFork(){
   
    const products = yield  call(Api,'watch')
    console.log(products)
    console.log("Fork")
    
    yield put({type:SET_DATA_BY_FORK,payload:products.data})
}

function* getReduxState(){
   const data = yield select(state=>state.product)
   console.log(data)
   
}


function* productSaga(){
    yield takeEvery(GET_DATA_BY_FORK,getApiDataByFork)
    yield takeLatest(GET_DATA_BY_CALL,getApiDataByCall)
    yield takeEvery(GET_DATA,getApiData)
    yield takeEvery(GET_INTERNAL_STATE,getReduxState)
    
    yield take(HELLO) 
}

export default productSaga