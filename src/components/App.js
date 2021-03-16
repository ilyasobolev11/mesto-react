import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />


      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_avatar-link"
            id="avatarLink-input"
            name="avatar" type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error" id="avatarLink-input-error" />
        </label>
        <button className="popup__submit-btn" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_user-name"
            id="username-input"
            name="userName"
            type="text"
            placeholder="Имя"
            minLength={2}
            maxLength={40}
            required
          />
          <span className="popup__input-error" id="username-input-error" />
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_status"
            id="status-input"
            name="status"
            type="text"
            placeholder="О себе"
            minLength={2}
            maxLength={200}
            required
          />
          <span className="popup__input-error" id="status-input-error" />
        </label>
        <button className="popup__submit-btn" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
        name="create-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_place-name"
            id="placeName-input"
            name="name" type="text"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            required
          />
          <span className="popup__input-error" id="placeName-input-error" />
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_img-link"
            id="imgLink-input"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error" id="imgLink-input-error" />
        </label>
        <button className="popup__submit-btn" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm name="confirm-delete-card" title="Вы уверены?">
        <button className="popup__submit-btn" type="submit">Да</button>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
