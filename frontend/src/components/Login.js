import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password })
      .then(() => {
        setEmail("");
        setPassword("");
        history.push("/");
      })
      .catch((err) => {
        setMessage(err);
      })
  };

  return (
    <section className="register">
      <p className="register__welcome">Вход</p>
      <p className="register__error">{message}</p>
      <form className="register__form" onSubmit={handleSubmit}>
        {/* <label htmlFor="email">Email</label> */}
        <input
          className="register__input"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        {/* <span id="register-email-error" className="register__error"></span> */}
        {/* <label htmlFor="password">Пароль</label> */}
        <input
          className="register__input"
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Пароль"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        {/* <span id="register-password-error" className="register__error"></span> */}
        <div className="register__button-container">
          <button className="register__link" type="submit">
            Войти
          </button>
        </div>
      </form>
    </section>
  );
};

export default withRouter(Login);
