import { HELLO, SET_DATA, SET_DATA_BY_CALL, SET_DATA_BY_FORK } from "./constants"


const intialState={
    product:[
         
    ]
}

const sagaReducer=(state=intialState,action)=>{
    switch(action.type){
     case SET_DATA :{ 
        // console.log(action.payload)
        return {product: [...action.payload.products]}}
    case SET_DATA_BY_CALL :{
        // console.log(action.payload)
        return {product :[...action.payload.products]}
    }
    case SET_DATA_BY_FORK :{
        // console.log(action.payload)
        return {product :[...action.payload.products]}
    }
    case HELLO:  {
        console.log("Hello")
        return  state}
     default : return state
    }
}

export default sagaReducer