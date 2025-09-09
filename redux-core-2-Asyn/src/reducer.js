import * as actions from "./actionType";

// Initial state for users slice
const initialUserState = {
  list: [],        // array of users
  loading: false,  // true when request in progress
  error: null,     // error message if request fails
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actions.FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case actions.ADD_USER_SUCCESS:
      return { ...state, loading: false, list: [...state.list, action.payload] };

    case actions.GET_USER_SUCCESS:
      return { ...state, loading: false, list: action.payload };

    case actions.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter((u) => u.id !== action.payload.id),
      };

    case actions.FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};


// Initial state for todos slice
const initialTodoState = {
  list: [], // array of todos
};

export const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return { ...state, list: [...state.list, action.payload] };

    case actions.DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((t) => t.id !== action.payload.id),
      };

    default:
      return state;
  }
};