import { useEffect} from 'react'

const Coffee = () => {
    useEffect(() => {
        const handleScroll = () => {
          const prices = document.querySelectorAll('.price');
          prices.forEach(price => {
            const rect = price.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setTimeout(() => {
                    price.classList.add('visible');
                }, 800);              
            }else{
                price.classList.remove('visible');
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  return (
    <div className='coffee-bg'>
    <div className='coffee-titulo-menu' id='menu-coffee'>
        <h2>MENU</h2>
    </div>
    <div className="coffee-container">
        <div className='coffee-cafe'>
            <h2 className="coffee-tittle">
                <img src="/images/loguito-b.png" alt="Café" className="coffee-icon" />
                COFFEE
            </h2>
            <div className='coffee-list-expresso'>
                <ul className="coffee-list">
                    <li>Expresso - <span className="price">$2.0</span></li>
                    <li>Double Expresso - <span className="price">$4.0</span></li>
                </ul>
                <img src='/images/expresso.png' className='coffee-image' />
            </div>
            <div className='coffee-list-latte'>
                <ul className="coffee-list">
                    <li>Cappucino - <span className="price">$4.0</span></li>
                    <li>Latte - <span className="price">$3.0</span></li>
                    <li>Mocha - <span className="price">$3.0</span></li>
                </ul>
                <img src='/images/latte.png' className='coffee-image' />
            </div>
            <div className='coffee-list-short'>
                <ul className="coffee-list">
                    <li>Short Black - <span className="price">$2.0</span></li>
                    <li>Long Black - <span className="price">$4.0</span></li>
                </ul>
                <img src='/images/short.png' className='coffee-image' />
            </div>
        </div>
        <div className='coffee-drinks'>
            <h2 className="coffee-tittle">
                <img src="/images/loguito-b.png" alt="Bebidas" className="coffee-icon" />
                BAKERY
            </h2>
            <div className='coffee-drinks-image'>
                <ul className="drinks-list">
                    <li>Lemon Pie - <span className="price">$3.0</span></li>
                    <li>Lemon Cupcake - <span className="price">$4.0</span></li>
                    <li>Choco Cupcake - <span className="price">$3.0</span></li>
                    <li>Oatmeal Cookie - <span className="price">$2.0</span></li>
                    <li>Chocochip Cookie - <span className="price">$2.0</span></li>
                    <li>Cinamon Roll - <span className="price">$4.0</span></li>
                </ul>
                <img src='/images/galletas.png' className='drinks-image'/>
            </div>            
        </div>
    </div>
    </div>
  )
}

export default Coffee