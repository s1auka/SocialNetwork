import { NavLink } from 'react-router-dom';
import headerStyle from './Header.module.css';
import siteLogo from '../../assets/images/site-logo.png';

const Header = (props) => {
    return (
        <header className={headerStyle.header}>
            <img src={siteLogo} alt='' />
            <div className={headerStyle.login}>
                {props.isAuth ? props.login : <NavLink to="/auth/login"> "Login"</NavLink>}
            </div>
        </header>
    )
}

export default Header;