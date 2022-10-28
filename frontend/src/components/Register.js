import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister({ email, password });
  };

  return (
    <section className="register">
      <p className="register__welcome">Регистрация</p>
      <form className="register__form" onSubmit={handleSubmit}>
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
        {/* <span id="register-email-error" className="register__error register__error_visible">ffff</span> */}
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
        {/* <span id="register-password-error" className="register__error register__error_visible">ffffzzzzzzzz</span> */}
        <div className="register__button-container">
          <button className="register__link" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </form>
      <p className="register__signin">
        Уже зарегистрированы?
        <Link to="/sign-in" className="register__login-link">
          Войти
        </Link>
      </p>
    </section>
  );
};

export default withRouter(Register);
