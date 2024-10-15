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
                        <li><a href='#'>Location</a></li>
                        <li><a href='#'>Menu</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </nav>                
            </div>                       
        </header>
    );
};

export default Header;