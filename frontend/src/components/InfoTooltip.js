import React from "react";
import good from "../images/infiToolTip__Good.png";
import bad from "../images/infiToolTip__Bad.png";

function InfoToolTip({ isOpen, isReg, okText, onClose, message }) {
  // клик по оверлею для закрытия
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={isOpen ? "popup popup_opened" : "popup"}
      onClick={handleOverlayClick}
    >
      <div className="popup__container popup__container_type_message">
        <button
          className="popup__close-button popup__close-button_type_edit-pic"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <img
          className="popup__info-icon"
          src={isReg ? good : bad}
          alt={isReg ? "Успешная регистрация" : "Ошибка регистрации"}
        />
        <p className="popup__info-text">{isReg ? okText : message}</p>
      </div>
    </div>
  );
}

export default InfoToolTip;
