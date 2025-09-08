import * as actions from "./actionType";

const initialState = [{id : 78,name:"niyaf"}]


export const reducer =(state = initialState,action)=>{
    switch(action.type){
        case actions.ADD_TODO :
            const user = {
                 id :Math.floor( Math.random()*100),
                 name : action.payload.name,
            }
            return [...state,user]
        case actions.DELETE_TODO :
            return  state.filter( s=> s.id !== action.payload.id)
        case actions.GET_TODO :
            return state    
        default :
           return state    
    }
}