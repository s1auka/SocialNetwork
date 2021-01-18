import { NavLink } from 'react-router-dom';
import navStyle from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navStyle.nav}>
            <div className="nav__">
                <NavLink to="/profile" activeClassName={navStyle.active}>Profile</NavLink>
            </div>
            <div className="nav__">
                <NavLink to='/dialogs' activeClassName={navStyle.active}>Messages</NavLink>
            </div>
            <div className="">
                <NavLink to='/news' activeClassName={navStyle.active}>News</NavLink>
            </div>
            <div className="">
                <a>Music</a>
            </div>
            <div className={navStyle.settings}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;