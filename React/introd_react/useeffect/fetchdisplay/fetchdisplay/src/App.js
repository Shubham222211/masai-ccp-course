import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        
        const data = await res.json()
        setUsers(data)
      } catch (err) {
        setError(err.message);
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      {users.map(user => (
        <div
          key={user.id}
          style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
