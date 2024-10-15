import Header from '../complementos/Header'
import Logo from '../complementos/Logo'
import Direccion from '../complementos/Direccion'


const Home = () => {
  return (
    <div className='contenedor-principal'>
        <Header />
        <Logo />
        <Direccion />
    </div>
  )
}

export default Home