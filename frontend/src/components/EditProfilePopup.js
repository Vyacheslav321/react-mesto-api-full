import React, {useState, useEffect, useContext} from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState();
  const [description, setDescription] = useState();

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-bio"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <div className="popup__block">
        <input
          id="popupName"
          className="popup__input popup__input_type_name"
          type="text"
          name="name"
          value={name || ""}
          onChange={handleChangeName}
          minLength="2"
          maxLength="40"
          required
          autoFocus
          placeholder="Название"
        />
        <span id="popupName-error" className="error"></span>
      </div>
      <div className="popup__block">
        <input
          id="popupWork"
          className="popup__input popup__input_type_work"
          type="text"
          name="about"
          value={description || ""}
          onChange={handleChangeDescription}
          minLength="2"
          maxLength="200"
          required
          placeholder="Название"
        />
        <span id="popupWork-error" className="error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
