import headerLogo from '../images/header.svg';

function Header() {
    return (
        <header className="header page__content">
            <img src={headerLogo} className="header__logo" alt="логотип" />
        </header>
    );
}

export default Header;