import React from 'react';

const RegisterForm: React.FC = () => {
  return (
    <form>
      <input type="email" />
      <input type="password" />
      <input type="password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
