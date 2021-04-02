import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({onAddPlaceSubmit,...props}) {
  const [name, setName] = useState({value: '', valid: false, validationMessage: ''});
  const [link, setLink] = useState({value: '', valid: false, validationMessage: ''});
  const isValid = name.valid && link.valid;

  function handleNameChange(evt) {
    setName({
      value: evt.target.value,
      valid: evt.target.validity.valid,
      validationMessage: evt.target.validationMessage
    });
  }

  function handleLinkChange(evt) {
    setLink({
      value: evt.target.value,
      valid: evt.target.validity.valid,
      validationMessage: evt.target.validationMessage
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlaceSubmit({
      name: name.value,
      link: link.value
    })
  }

  useEffect(() => {
    if (props.isOpen) {
      setName({value: '', valid: false, validationMessage: ''});
      setLink({value: '', valid: false, validationMessage: ''});
    }
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="create-card"
      title="Новое место"
      onSubmit={handleSubmit}
      {...props}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_place-name"
          id="placeName-input"
          name="name"
          type="text"
          placeholder="Название"
          minLength={2}
          maxLength={30}
          value={name.value}
          onChange={handleNameChange}
          required
        />
        <span className="popup__input-error" id="placeName-input-error">
          {name.validationMessage}
        </span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_img-link"
          id="imgLink-input"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          value={link.value}
          onChange={handleLinkChange}
          required
        />
        <span className="popup__input-error" id="imgLink-input-error">
          {link.validationMessage}
        </span>
      </label>
      <button className={`popup__submit-btn ${!isValid && 'popup__submit-btn_disabled'}`} type="submit" disabled={!isValid}>Создать</button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
