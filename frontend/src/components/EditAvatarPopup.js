import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const urlAvatar = useRef("");

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateAvatar({
      avatar: urlAvatar.current.value,
    });
  }

  useEffect(() => {
    if (isOpen) {
      urlAvatar.current.value = "";
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__block">
        <input
          ref={urlAvatar}
          id="avatar"
          className="popup__input popup__input_type_avatar"
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар"
          required
        />
        <span id="avatar-error" className="error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
