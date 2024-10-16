

const Direccion = () => {
    
  return (
    <div className="d-container">
        <div className="d-fondo">
            
        </div>
        <div className="d-contenido" id="direccion">
            <img src="/images/loguito.png" alt="c-logo" />
            <h2>SCHEDULE AND LOCATION</h2> 
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