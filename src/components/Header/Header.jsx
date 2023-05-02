import style from './Header.module.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <nav>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;