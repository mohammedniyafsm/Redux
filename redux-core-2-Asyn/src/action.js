import * as actions from "./actionType";

// Add a new user
export const addUser = (name) => async (dispatch) => {
  // step 1: dispatch request (loading: true)
  dispatch({ type: actions.FETCH_USER_REQUEST });

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: `${name.toLowerCase()}@example.com`,
      }),
    });

    const data = await response.json();

    // step 2: dispatch success with payload
    dispatch({
      type: actions.ADD_USER_SUCCESS,
      payload: {
        id: data.id,
        name: data.name,
        email: data.email,
      },
    });
  } catch (error) {
    // step 3: dispatch failure with error
    dispatch({ type: actions.FETCH_USER_FAILURE, payload: error.message });
  }
};

// Get all users
export const getUser = () => async (dispatch) => {
  dispatch({ type: actions.FETCH_USER_REQUEST });

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    dispatch({
      type: actions.GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: actions.FETCH_USER_FAILURE, payload: error.message });
  }
};

// Delete a user
export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: actions.FETCH_USER_REQUEST });

  try {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    dispatch({
      type: actions.DELETE_USER_SUCCESS,
      payload: { id },
    });
  } catch (error) {
    dispatch({ type: actions.FETCH_USER_FAILURE, payload: error.message });
  }
};
