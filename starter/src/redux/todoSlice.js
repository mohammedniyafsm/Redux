import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name : "todo",
    initialState : [
        { id:1 , title:"Read Books",completed:true},
        { id:2 , title:"Read ",completed:false},
    ],
    reducers : {
        addTodo : (state,action )=>{
            const todo = {
                id : nanoid(),
                title : action.payload.title,
                completed : false
            }
            state.push(todo)
        },
        deleteTodo : (state,action) =>{
            return state.filter((todo)=> todo.id !== action.payload.id);
        },
        toggleCheckbox : (state,action)=>{
            const index = state.findIndex((todo)=> todo.id == action.payload.id);
            state[index].completed = action.payload.completed;
        }
    }
})

export const {addTodo,deleteTodo,toggleCheckbox } = todoSlice.actions;
export default todoSlice.reducer;