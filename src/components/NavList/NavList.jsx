import NavItem from "../NavItem/NavItem";
import style from './NavList.module.scss';

const NavList = () => {
    return (
        <>
            <nav style={{width: 600}}>
                <ul className={style.navList}>
                    <NavItem />
                    <NavItem />
                    <NavItem />
                </ul>
            </nav>
        </>
        
    );
}

export default NavList;