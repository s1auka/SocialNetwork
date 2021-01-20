import { NavLink } from 'react-router-dom';
import navStyle from './Navbar.module.css';

const Navbar = (props) => {
    let componentsURLs = props.urls.map(el => {
        return (
            <div>
                <NavLink to={'/' + el} activeClassName={navStyle.active}>{el[0].toUpperCase() + el.slice(1)}</NavLink>
            </div>
        )
    })

    return (
        <nav className={navStyle.nav}>
            {componentsURLs}
        </nav>
    )
}

export default Navbar;