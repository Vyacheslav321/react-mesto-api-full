function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  onSubmit,
  buttonText,
  children,
}) {
  // клик по оверлею для закрытия
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <section
      className={
        `popup popup_type_${name} ` + (isOpen === true ? "popup_opened" : "")
      }
      onClick={handleOverlayClick}
    >
      <div className="popup__container popup__container_type_input">
        <button
          className={`popup__close-button popup__close-button_type_${name}`}
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <form className="popup__form" name={`${name}`} onSubmit={onSubmit}>
          <h3 className="popup__header popup__header_type_input">{title}</h3>
          {children}
          <button
            className="popup__save-button"
            type="submit"
            aria-label="Сохранить"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;
