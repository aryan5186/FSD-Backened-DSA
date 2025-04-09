import React, { useState, useEffect } from 'react';
import axios from 'axios';

const View = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    viewdata();
  }, []);

  const viewdata = async () => {
    try {
      const res = await axios.get('https://fsd-backend-sem-vi-ds-a.onrender.com/users');
      console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <h1>Registered Users List</h1>
      <table style={{ border: '2px solid red', backgroundColor: 'greenyellow', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
