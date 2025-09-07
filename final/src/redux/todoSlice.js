import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const getTodo = createAsyncThunk(
    'todos/getTodo',
    async ()=>{
        const response = await fetch("http://localhost:7000/todos");
        return await response.json();
    }
)

export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async(payload)=>{
        const response = await fetch("http://localhost:7000/todos",{
            method : "POST",
            headers :{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(payload)
        })
        return await response.json();
    }
)


export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async(id)=>{
        const response = await fetch(`http://localhost:7000/todos/${id}`,{
            method : "DELETE",
            headers : {

                'Content-Type' : "application/json"
            }
        });
        return id ;
    }
)

export const toggleBox = createAsyncThunk(
    'todos/toggleBox',
    async({id,completed})=>{
        const response = await fetch(`http://localhost:7000/todos/${id}`,{
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({completed})
        })
        return  {id ,completed};
        
    },
)

export const todoSlice = createSlice({
    name : "todos",
    initialState : [],
    reducers : {

    },
    extraReducers : (builder)=> {
        builder.addCase(getTodo.fulfilled,(state,action)=>{
            return action.payload
        })
        builder.addCase(deleteTodo.fulfilled,(state,action)=>{
            return state.filter((s)=> s.id !== action.payload);
        })
        builder.addCase(addTodo.fulfilled,(state,action)=>{
            state.push(action.payload)
        })
        builder.addCase(toggleBox.fulfilled,(state,action)=>{
            const index = state.findIndex((s)=> s.id == action.payload.id);
            state[index].completed = action.payload.completed;
        })
    }
})

export const { } =todoSlice.actions;
export default todoSlice.reducer;