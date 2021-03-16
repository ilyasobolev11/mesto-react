import React from 'react';

function Card({card, onCardClick}) {

  function handleImgClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__item">
      <article>
        <button className="elements__delete-btn" type="button" aria-label="Удалить"></button>
        <img
          className="elements__item-img"
          src={card.link}
          alt={card.name}
          onClick={handleImgClick}
        />
        <div className="elements__row">
          <h2 className="elements__item-title">{card.name}</h2>
          <div className="elements__column">
            <button className="elements__like-btn" type="button" aria-label="Нравится"></button>
            <span className="elements__likes-count">{card.likes.length}</span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
