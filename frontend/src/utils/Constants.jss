//селекторы и классы
export const cardTemplate = "#card-template";
export const popupOpenedClass = "popup_opened";
export const elementsSelector = ".elements";
export const popupElementNameSelector = ".popup_type_edit-bio";
export const popupElementPicSelector = ".popup_type_edit-pic";
export const popupBigPictureSelector = ".popup_type_bigpicture";
export const popupElementAvatarSelector = '.popup_type_avatar';
export const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const elements = document.querySelector(".elements"); //темплейт карточек
export const popupSelectorAll = document.querySelectorAll(".popup"); //объявляю все попапы

//обьявляю попап изменения иконки профиля (avatar)
export const popupElementAvatar = document.querySelector(".popup_type_avatar");
export const formSaveAvatar = popupElementAvatar.querySelector(".popup__form"); //фома изменения аватара (avatar)
//
export const popupInputSelectors = {
  popupNameSelector: ".popup__input_type_name",
  popupWorkSelector: ".popup__input_type_work",
  popupAvatarSelector: ".popup__input_type_avatar",
  popupPicNameSelector: ".popup__input_type_picname",
  popupPicUrlSelector: ".popup__input_type_picurl"
}
//обьявляю попап изменения имени/работы (name)
export const popupElementEditBio = document.querySelector(".popup_type_edit-bio");
//поля карточки изменения имени/работы (name)
export const formSaveName = popupElementEditBio.querySelector(".popup__form"); //форма изменения имени/работы (name)
//поля вывода имени/работы в форме (name)

//обьявляю попап добавления карточки (pic)
export const popupElementEditPic = document.querySelector(".popup_type_edit-pic");
//поля формы добавления карточки (pic)
export const formSavePic = popupElementEditPic.querySelector(".popup__form"); //фома добавления карточки (pic)

//обьявляю попап фото
export const popupBigPicture = document.querySelector(".popup_type_bigpicture");//
//поля вывода просмотра фото
export const popupPictureSelectors = {
  pictureImgSelector: ".popup__picture",
  pictureTextSelector: ".popup__text"
}
export const pictureImg = popupBigPicture.querySelector(".popup__picture");//
export const pictureText = popupBigPicture.querySelector(".popup__text");//

//попап подтверждения удаления
export const popupElementDelete = '.popup_type_delete';

//кнопки открытия форм
export const profileEdit = document.querySelector(".profile__button-edit");//
export const photoAdd = document.querySelector(".profile__button-add");//
export const profileAvatar = document.querySelector('.profile__button-avatar')

export const profileSelectors = {
  name: '.profile__name',
  work: '.profile__work',
  avatar: '.profile__avatar'
}