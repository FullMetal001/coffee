import React, { useEffect, useState } from 'react';

const Direccion = () => {
    const [maxWidth, setMaxWidth] = useState(window.innerWidth); // Estado para almacenar el ancho de la ventana

    // Función para actualizar el ancho
    const updateWidth = () => {
        setMaxWidth(window.innerWidth);
    };

    // useEffect para agregar y limpiar el event listener
    useEffect(() => {
        window.addEventListener('resize', updateWidth); // Agrega el event listener

        // Limpieza del event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);
  return (
    <div className="d-container">
        <div className="d-fondo">
            
        </div>
        <div className="d-contenido">
            <img src="/images/loguito.png" alt="c-logo" />
            <h2>SCHEDULE AND LOCATION</h2>  
            hol: {maxWidth}         
        </div>       
        <div className="d-lugar">
            <p>ALL WEEK 7:30 AM TO 7:00 PM</p>
            <p>NW 17th St with NW 34th Ave.</p>
        </div>
        <div className="d-maps">
            <div className="iframe-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1068.03265095628!2d-80.2534382264173!3d25.789737214284738!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1729004059173!5m2!1ses!2sve" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>        
    </div>   
  )
}

export default Direccion