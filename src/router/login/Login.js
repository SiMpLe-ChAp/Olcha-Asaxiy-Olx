import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import './Login.css';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    let newUser = { username, password };
    console.log(newUser);
    if( username === 'ajax' && password == "12022010"){
      toast.success("log in")
      localStorage.setItem("user ",JSON.stringify(newUser))
      navigate("/admin/create-product")
    }
    else{
      toast.error("username yoki password hato")
    }
  };

  return (
    <form onSubmit={handleLogin} className="login container">
      <div className="close-icon" onClick={handleClose}>
        <FiX className="close-icon" />
      </div>
      <h2 className="title">Telefon raqamini kiriting</h2>
      <p className="subtitle">Tasdiqlash kodini SMS orqali yuboramiz</p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input"
        placeholder="username"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="input"
        value={password}

        placeholder="password"
      />
      <button className="button">Kodni terish</button>
      <div className="footer__login">
        <div className="footer-text">
          <p className="info" style={{ fontWeight: '600' }}>
            Parol bilan kirish
          </p>
          <p className="info large-text">
            Avtotizatsiyadan o'tish orqali siz:
            <span style={{ color: 'dodgerblue' }}>
              shaxsiy <br /> ma'lumotlarni qayta ishlash siyosatiga rozilik <br /> bildirasiz
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
