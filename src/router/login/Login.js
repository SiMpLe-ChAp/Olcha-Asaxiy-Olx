import React, { useState } from 'react';
import './Login.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let newUser = { username, password };
    console.log(newUser);
    if (username === 'ajax' && password === '12022010') {
      toast.success('log in');
      localStorage.setItem('user ', JSON.stringify(newUser));
      navigate('/admin/create-product');
    } else {
      toast.error('username yoki password hato');
    }
  };

  return (
    <form onSubmit={handleLogin} className="login">
      <div className="Profile">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="login__card">
          <button className="facebook">
            <BsFacebook className="face" />
            &nbsp;&nbsp;&nbsp; Продолжить через Facebook
          </button>
          <br /><br />
          <button className="facebook">
            <AiFillApple className="apple" />
            &nbsp;&nbsp;&nbsp; Продолжить через Apple
          </button>
          <br /><br />
          <button className="facebook">
            <FcGoogle className="google" />
            &nbsp;&nbsp;&nbsp; Продолжить через Google
          </button><br />
          <h1>Username</h1>
          <input  type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
          <h1>Password</h1>
          <input type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="input"
        value={password} />
          <h3>Забыли пароль?</h3><br />
          <button className="enter">Войти</button>
          <h4>
            При входе вы соглашаетесь с нашими{' '}
            <span>
              Условия <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              использования.
            </span>
          </h4>
        </div>
        <Link to={"/"}>
        <button style={{ padding: '10px 20px' ,color:"dodgerblue ",border:"none", backgroundColor: 'white', fontSize: '16px',borderRadius:20 }}>Go to Home</button>
        </Link>

      </div>
    </form>
  );
};

export default Login;
