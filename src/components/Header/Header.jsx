import NavList from '../NavList/NavList';
import style from './Header.module.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <NavList />
        </header>
    );
}

export default Header;