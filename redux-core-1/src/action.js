import * as actions from "./actionType";

export const addTodo=(name)=>({
    type : actions.ADD_TODO,
    payload : {
        name
    }
})

export const deleteTodo=(id)=>({
    type : actions.DELETE_TODO,
    payload : {
        id
    }
})
export const getTodo=()=>({
    type : actions.GET_TODO,
    payload : {
        
    }
})