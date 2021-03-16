import React from 'react';

function ImagePopup({card, onClose}) {

  function handlePopupOverlayClick(evt) {
    if (evt.target.classList.contains('popup')) onClose();
  }

  return (
    <div
      className={`popup popup_type_zoom-img ${card && 'popup_opened'}`}
      onClick={handlePopupOverlayClick}
    >
      <div className="popup__img-container">
        <img className="popup__img" src={card?.link} alt={card?.name} />
        <p className="popup__img-caption">{card?.name}</p>
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
