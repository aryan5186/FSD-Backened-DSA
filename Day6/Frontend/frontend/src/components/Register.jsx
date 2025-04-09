import React from 'react';
import axios from 'axios';

const Register = () => {
  const handleregister = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      age: e.target.age.value,
    };

    try {
      await axios.post('http://localhost:9000/users', user);
      await axios.post('https://fsd-backend-sem-vi-ds-a.onrender.com/users', user);
      alert('User Registered Successfully');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed!');
    }
  };

  return (
    <div>
      <form onSubmit={handleregister}>
        <label>Name:</label> <input type='text' name='name' required />
        <label>Age:</label> <input type='number' name='age' required />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

// ✅ Export it as default
export default Register;
