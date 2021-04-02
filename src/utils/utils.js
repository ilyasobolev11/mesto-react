const submitButtonTextConfig = {
  popupEditAvatar: {
    default: 'Сохранить',
    submitProcess: 'Сохранение...',
    ready: 'Готово'
  },
  popupEditProfile: {
    default: 'Сохранить',
    submitProcess: 'Сохранение...',
    ready: 'Готово'
  },
  popupCreateCard: {
    default: 'Создать',
    submitProcess: 'Создание...',
    ready: 'Готово'
  },
  popupConfirmDeleteCard: {
    default: 'Да',
    submitProcess: 'Удаление...',
    ready: 'Готово'
  }
}

const apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-20',
  token: {authorization: '614d3213-6f90-4cae-80f4-7341542ff306'}
}

export {
    submitButtonTextConfig,
    apiConfig
};
