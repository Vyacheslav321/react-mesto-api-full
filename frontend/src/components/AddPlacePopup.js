import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [picName, setPicName] = useState("");
  const [picUrl, setPicUrl] = useState("");

  function handleChangePicName(e) {
    setPicName(e.target.value);
  }

  function handleChangePicUrl(e) {
    setPicUrl(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name: picName,
      link: picUrl,
    });
  }

  useEffect(() => {
    if (isOpen) {
      setPicName("");
      setPicUrl("");
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="edit-pic"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Создать"
    >
      <div className="popup__block">
        <input
          onChange={handleChangePicName}
          id="picName"
          className="popup__input popup__input_type_picname"
          type="text"
          name="picName"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          value={picName}
        />
        <span id="picName-error" className="error"></span>
      </div>
      <div className="popup__block">
        <input
          onChange={handleChangePicUrl}
          id="picURL"
          className="popup__input popup__input_type_picurl"
          type="url"
          name="picURL"
          placeholder="Ссылка на картинку"
          required
          value={picUrl}
        />
        <span id="picURL-error" className="error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
