import React from 'react'

const Coffee = () => {
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
            <ul className="coffee-list">
                <li>American Coffee - $3.00</li>
                <li>Coffee Latte - $4.00</li>
                <li>Mocha Coffee - $4.50</li>
                <li>Espresso Coffee - $2.50</li>
            </ul>
        </div>
        <div className='coffee-drinks'>
            <h2 className="coffee-tittle">
                <img src="/images/loguito-b.png" alt="Bebidas" className="coffee-icon" />
                BAKERY
            </h2>
            <ul className="coffee-list">
                <li>Orange Juice - $2.50</li>
                <li>Mineral Water - $1.50</li>
                <li>Iced Tea - $2.00</li>
                <li>Strawberry Milkshake - $3.50</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Coffee