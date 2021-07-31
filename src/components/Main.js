import React from "react";
import { api } from '../utils/Api.js';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = React.useState([]);
    const [userDescription, setUserDescription] = React.useState([]);
    const [userAvatar, setUserAvatar] = React.useState([]);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);

            })
            .catch((err) => {
                console.log(err);
            })
    }, )

    React.useEffect(() => {
        api.getCards()
            .then((cards) => {
                setCards(cards)
            })
            .catch((err) => {
                console.log(err);
            })
    }, )

    return (
        <main>
            <section className="profile page__content">
                <div className="profile__info">
                    <img src={userAvatar} className="profile__avatar" alt="Аватар" onClick={props.onEditAvatar} />
                    <div className="profile__avatar-icon"></div>
                    <div className="profile__content">
                        <div className="profile__add">
                            <h1 className="profile__name">{userName}</h1>
                            <button type="button" className="profile__edit hover" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__jod">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="profile__button hover" onClick={props.onAddPlace}></button>
            </section>
            <section className="cards page__content">
            </section>

            <section className="cards page__content">
                {cards.map((card => <Card
                    key={card._id}
                    {...card}
                    onCardClick={props.onCardClick} />
                ))}
            </section>
        </main>
    )
}

export default Main;