import React, { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className='menu container'>
                <img src="/images/logo-icon.png" alt="Logo" className="logo" />
                <input type='checkbox' id='menu'/>
                <label for='menu'>
                    <img src='/images/menu.png' className='menu-icono' alt=''/>
                </label>
                <nav className='navbar'>
                    <ul>
                        <li><a href='#'>Ubicacion</a></li>
                        <li><a href='#'>Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;