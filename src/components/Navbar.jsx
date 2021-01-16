const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__">
                <a>Profile</a>
            </div>
            <div className="nav__">
                <a>Messages</a>
            </div>
            <div className="">
                <a>News</a>
            </div>
            <div className="">
                <a>Music</a>
            </div>
            <div className="nav__item-settings">
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;