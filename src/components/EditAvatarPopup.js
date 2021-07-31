import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    return (
        <PopupWithForm
            name='avatar_update'
            title='Обновить аватар'
            buttonText='Создать'

            isOpen={props.isOpen}
            onClose={props.onClose}
        >

            <input id="avatarurl" type="url" name="link"
                className={`form-container__input form-container__input_${props.name}`} value=""
                placeholder="Ссылка на картинку" tabIndex="2" required />
            <span className="form-container__input-error" id="avatarurl-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;