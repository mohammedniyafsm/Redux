import { useEffect, useState } from "react";
import "./App.css";
import { store } from "./store";
import { addUser, deleteUser, getUser } from "./action";

function App() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Subscribe to Redux store updates
    const unsubscribe = store.subscribe(() => {
      const state = store.getState().users; // pick only users slice
      setUsers(state.list);
      setLoading(state.loading);
      setError(state.error);
    });

    // Initial fetch of users
    store.dispatch(getUser());

    return () => unsubscribe(); // cleanup on unmount
  }, []);

  const handleDelete = (id) => {
    store.dispatch(deleteUser(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return; // ignore empty input
    store.dispatch(addUser(value));
    setValue("");
  };

  return (
    <div className="App">
      <h1>Users Management</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Enter name"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        {users.map((user) => (
          <div key={user.id} style={{ margin: "10px 0" }}>
            <span>
              {user.name} - {user.email}
            </span>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
