
import axios from "axios"

export const obj = {
    GET_TODOS_REQUEST : "GET_TODOS_REQUEST",
    GET_TODOS_SUCESS : "GET_TODOS_SUCESS",
    GET_TODOS_FAILURE : "GET_TODOS_FAILURE",
    CURRENT_TODO : "CURRENT_TODO"
}


export function currentTodo(obj){
    return {
        type : "CURRENT_TODO",
        payload : obj
    }
}


function getTodosRequest(){
     return {
        type : obj.GET_TODOS_REQUEST
     }
}

function getTodosSuccess(data){
    return {
        type : obj.GET_TODOS_SUCESS,
        payload : data
    }
}

function getTodosFailure(){
    return {
        type : obj.GET_TODOS_FAILURE
    }
}

export function mainTodosRequest(){
    return (dispatch) => {
         dispatch(getTodosRequest())
         axios.get('http://localhost:8080/todos')
        .then(res=>{

            dispatch(getTodosSuccess(res.data))
        })
        .catch(err=>{
            dispatch(getTodosFailure())
            console.log(err)
      })
    }
}