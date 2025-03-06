import { NavLink } from "react-router-dom";
import "./Footer.scss";
import MenuButton from "../menu-button/menu-button";
import { useEffect, useState } from "react";
const Footer = () => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);



    return (
        <footer className="footer">
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? setCurrentPath(window.location.pathname) : '')}>
                    <MenuButton text="Home" icon="home" isActive={currentPath === '/'} />
                </NavLink>
                <NavLink to="/wishlist" className={({ isActive }) => isActive ? setCurrentPath(window.location.pathname) : ''}>
                    <MenuButton text="WishList" icon="wishlist" isActive={currentPath === '/wishlist'}   />
                </NavLink>
                <NavLink to="/search" className={({ isActive }) => isActive ? setCurrentPath(window.location.pathname) : ''}>
                    <MenuButton text="Search" icon="search" isActive={currentPath === '/search'}    />
                </NavLink>
                <NavLink to="/calendar" className={({ isActive }) => isActive ? setCurrentPath(window.location.pathname) : ''}>
                    <MenuButton text="Calendar" icon="calendar" isActive={currentPath === '/calendar'}   />
                </NavLink>
                <NavLink to="/my-trip" className={({ isActive }) => isActive ? setCurrentPath(window.location.pathname) : ''}>
                    <MenuButton text="MyTrip" icon="my-trip" isActive={currentPath === '/my-trip'} />
                </NavLink>
            </nav>
        </footer>
    )
}   

export default Footer;
