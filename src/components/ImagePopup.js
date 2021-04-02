import React from 'react';

function ImagePopup({card, onClose}) {

  const targetCard = React.useRef(null);// или через state реализовать?

  if (card) {
    targetCard.current = card;
  }

  function handlePopupOverlayClick(evt) {
    if (evt.target.classList.contains('popup')) onClose();
  }

  return (
    <div
      className={`popup popup_type_zoom-img ${card?.action === 'open' && 'popup_opened'}`}
      onClick={handlePopupOverlayClick}
    >
      <div className="popup__img-container">
        <img className="popup__img" src={targetCard.current?.link} alt={targetCard.current?.name} />
        <p className="popup__img-caption">{targetCard.current?.name}</p>
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть окно просмотра фотографии"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default ImagePopup;
