import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <form>
      <input type="email" />
      <input type="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
