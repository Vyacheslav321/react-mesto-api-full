function ImagePopup({ card, onClose }) {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };
  
  return (
    <section
      className={`popup popup_type_bigpicture ${card.link && "popup_opened"}`}
      onClick={handleOverlayClick}
    >
      <div className="popup__container popup__container_type_picture">
        <button
          className="popup__close-button popup__close-button_type_picture"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <figure>
          <img className="popup__picture" src={card.link} alt={card.name} />
          <figcaption className="popup__text">{card.name}</figcaption>
        </figure>
        {/* <img className="popup__picture" src={card.link} alt={card.name} /> */}
        {/* <p className="popup__text">{card.name}</p> */}
      </div>
    </section>
  );
}
export default ImagePopup;
