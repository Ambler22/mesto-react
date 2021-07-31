import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
    return (
        <PopupWithForm
            name ='profile'
            title ='Редактировать профиль'
            buttonText ='Сохранить'

            isOpen = {props.isOpen}
            onClose = {props.onClose}
        >
            <input id={`${props.name}name`} type="text" name="name" className="form-container__input" value=""
                required="Введите имя" tabIndex="1" minLength="2" maxLength="40" />
            <span className="form-container__input-error" id={`${props.name}name-error`}></span>
            <input id={`${props.name}description`} type="text" name="description" className="form-container__input" value=""
                required="Введите описание" tabIndex="2" minLength="2" maxLength="200" />
            <span className="form-container__input-error" id={`${props.name}description-error`}></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;