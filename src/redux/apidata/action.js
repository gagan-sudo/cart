import { GET_DATA, GET_DATA_BY_CALL, GET_DATA_BY_FORK, GET_INTERNAL_STATE, HELLO } from "./constants"


export const getData=()=>{
    return {
        type : GET_DATA
    }
}

export const getDataByCall=()=>{
    return {
        type : GET_DATA_BY_CALL
    }
}

export const getDataByFork=()=>{
    return {
        type : GET_DATA_BY_FORK
    }
}

export const getState=()=>{
    return {
        type : GET_INTERNAL_STATE
    }
}

export const hello=()=>{
    return {
        type : HELLO
    }
}