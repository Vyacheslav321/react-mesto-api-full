import { BASE_URL } from "./constants";

function checkResOk(res) {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((err) => {
    err.code = res.status;

    return Promise.reject(err);
  });
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResOk);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResOk);
};

export const getToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    metod: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }).then(checkResOk);
};
