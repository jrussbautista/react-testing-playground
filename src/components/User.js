import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((user) => setUser(user))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <span role="alert">Ops failed to load user</span>;
  }

  return <div>{user ? <h1>{user.name}</h1> : <span>Loading...</span>}</div>;
};

export default User;
