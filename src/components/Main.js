import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';
import userAvatarPlaceholder from '../images/avatar.jpg';

function Main(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userAvatar, setUserAvatar] = React.useState(userAvatarPlaceholder);
  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserData('/users/me'),
      api.getInitialCards('/cards')
    ])
      .then(([{name, about, avatar, _id}, initialCards]) => {
        setUserAvatar(avatar);
        setUserName(name);
        setUserDescription(about);
        setCards([...initialCards]);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="content root__content">

      <section className="profile content__profile">
        <div className="profile__user-data">
          <div className="profile__cover"
            tabIndex={0}
            onClick={props.onEditAvatar}
          >
            <img src={userAvatar} alt="аватар пользователя" className="profile__avatar" />
          </div>
          <div className="profile__column">
            <div className="profile__row">
              <h1 className="profile__user-name">{userName}</h1>
              <button
                className="profile__edit-btn"
                type="button"
                aria-label="Изменить данные пользовтеля"
                onClick={props.onEditProfile}
              />
            </div>
            <p className="profile__user-status">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          aria-label="Добавить место"
          onClick={props.onAddPlace}
        />
      </section>

      <section className="elements">
        {
          isLoading ? (
              <div className="elements__spinner">
                <span />
              </div>
            ) :
            cards.length ? (
              <ul className="elements__list">
                {cards.map(card => <Card key={card._id} card={card} onCardClick={props.onCardClick} />)}
              </ul>
            ) : (
              <p className="elements__text-notification">Нет добавленных мест</p>
            )
        }
      </section>

    </main>
  );
}

export default Main;
