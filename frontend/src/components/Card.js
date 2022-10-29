import React, {useContext} from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `element__trash ${
    isOwn ? "element__trash_visible" : "element__trash_hidden"
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like${ isLiked ? " element__like_active" : "" }`;

  function handleClick() {
    onCardClick(card);
  }

function handleLikeClick() {
  onCardLike(card);
}

function handleDeleteClick() {
  onCardDelete(card);
}

  return (
    <div id="card-template">
      <div className="element">
        <img
          className="element__pic"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <div className={cardDeleteButtonClassName} onClick={handleDeleteClick}></div>
        <div className="element__description">
          <h2 className="element__text">{card.name}</h2>
          <div className="element__like-wrapper">
            <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
            <p className="element__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
