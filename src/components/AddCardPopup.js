import PopupWithForm from "./PopupWithForm";

function AddCardPopup(props) {
    return (
        <PopupWithForm
            name='cards'
            title='Новое место'
            buttonText='Создать'

            isOpen = {props.isOpen}
            onClose = {props.onClose}
            >


            <input id={`${props.name}name`} type="text" name="name"
                className="form-container__input form-container__input_title" value="" placeholder="Название"
                tabIndex="1" minLength="2" maxLength="30" required />
            <span className="form-container__input-error" id={`${props.name}name-error`}></span>
            <input id={`${props.name}url`} type="url" name="link" className="form-container__input form-container__input_image"
                value="" placeholder="Ссылка на картинку" tabIndex="2" required />
            <span className="form-container__input-error" id={`${props.name}url-error`}></span>

        </PopupWithForm>
    )
}

export default AddCardPopup;