import React from  'react';

function PopupWithForm(props) {

  function handlePopupOverlayClick(evt) {
    if (evt.target.classList.contains('popup')) props.onClose();
  }

  return (
    <div
      className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}
      onMouseDown={handlePopupOverlayClick}
    >
      <div className="popup__form-container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
        </form>
        <button
          className="popup__close-btn"
          type="button"
          aria-label={`Закрыть окно "${props.name}"`}
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default PopupWithForm;
