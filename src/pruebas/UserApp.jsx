import React from "react";
import { useState, useEffect } from "react";

export const UserApp = () => {
  const [users, setusers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/todos"
      );
      const data = await response.json();
      setusers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Lista de usuarios</h1>
      <ul>
        {users.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>
    </>
  );
};
