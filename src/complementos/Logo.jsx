import { useState, useEffect } from "react";

const Logo = () => {
    const [currentImage, setCurrentImage] = useState('/images/logo1.png');
    const images = ['/images/logo1.png', '/images/logo2.png'];
   

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevImage => 
                prevImage === images[0] ? images[1] : images[0]
            );
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="logo-imagen">
            <img src={currentImage} alt='logo imagen' />
        </div>
    );
};

export default Logo;