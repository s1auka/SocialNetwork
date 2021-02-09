import { NavLink } from 'react-router-dom';
import headerStyle from './Header.module.css';

const Header = (props) => {
    return (
        <header className={headerStyle.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" alt='' />
            <div className={headerStyle.login}>
                {props.isAuth ? props.login : <NavLink to="/auth/login"> "Login"</NavLink>}
            </div>
        </header>
    )
}

export default Header;