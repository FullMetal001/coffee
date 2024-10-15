import Header from '../complementos/Header'
import Logo from '../complementos/Logo'
import Direccion from '../complementos/Direccion'
import Coffee from '../complementos/Coffee'
import Footer from '../complementos/Footer'


const Home = () => {
  return (
    <div className='contenedor-principal'>
        <Header />
        <Logo />
        <Direccion />
        <Coffee />
        <Footer />
    </div>
  )
}

export default Home