import React, { useState, useEffect } from 'react';
const Header = () => {   
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 720) {
                setMenuOpen(false);
            }
        };        
        window.addEventListener('resize', handleResize);        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const verElemento = (id) => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <header className={`header ${menuOpen ? 'open' : ''}`}>
            <div className='menu container'>
                <img src="/images/logo-icon.png" alt="Logo" className="logo" />
                <input type='checkbox' id='menu' onChange={toggleMenu}/>
                <label for='menu'>
                    <img src='/images/menu.png' className='menu-icono' alt=''/>
                </label>
                <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a onClick={() => verElemento('direccion')}>Location</a></li>
                        <li><a onClick={() => verElemento('menu-coffee')}>Menu</a></li>
                        <li><a onClick={() => verElemento('contacto')}>Contact</a></li>
                    </ul>
                </nav>                
            </div>                       
        </header>
    );
};

export default Header;