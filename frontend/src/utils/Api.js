import { BASE_URL } from "./constants";

class Api {
  constructor({ headers }) {
    this._headers = headers;
  }

  _getToken() {
      return localStorage.getItem('jwt')
  }

  _injectToken(headers) {
    if (!this._getToken()) {
      return headers;
    }
    return {
      ...headers, 'authorization': `Bearer ${this._getToken()}`
    }
  }

  _checkResOk(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json()
      .then((err) => {
        err.statusCode = res.status;
        return Promise.reject(err);
      })
  }

  // Получение информаци о карточках и пользователе
  getCards() {
    return fetch(`${BASE_URL}/cards`, {
      method: "GET",
      headers: this._injectToken(this._headers),
      credentials: 'include',
    }).then(this._checkResOk);
  }

  getUserInfo() {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: this._injectToken(this._headers),
      credentials: 'include',
    }).then(this._checkResOk);
  }

  // ЛАЙКИ
  changeLikeCardStatus(id, isLiked) {
    return fetch(`${BASE_URL}/cards/${id}/likes`, {
      method: `${isLiked ? "PUT" : "DELETE"}`,
      headers: this._injectToken(this._headers),
      credentials: 'include',
    }).then(this._checkResOk);
  }

  //  Добавление/Удаление карточки пользователя
  createUserCard(cardItem) {
    return fetch(`${BASE_URL}/cards`, {
      method: "POST",
      headers: this._injectToken(this._headers),
      credentials: 'include',
      body: JSON.stringify({
        name: cardItem.name,
        link: cardItem.link,
      }),
    }).then(this._checkResOk);
  }

  deleteUserCard(idCard) {
    return fetch(`${BASE_URL}/cards/${idCard}`, {
      method: "DELETE",
      headers: this._injectToken(this._headers),
      credentials: 'include',
    }).then(this._checkResOk);
  }
  // Редактирование инфо о пользователе
  setUserInfo(name, about) {
    return fetch(`${BASE_URL}/users/me`, {
      method: "PATCH",
      headers: this._injectToken(this._headers),
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResOk);
  }
  // Редактирование аватара пользователя
  setAvatar(userData) {
    return fetch(`${BASE_URL}/users/me/avatar`, {
      method: "PATCH",
      headers: this._injectToken(this._headers),
      credentials: 'include',
      body: JSON.stringify({
        avatar: userData,
      }),
    }).then(this._checkResOk);
  }
}

const api = new Api({
  headers: {
    "Content-Type": "application/json",
  }
});

export default api;