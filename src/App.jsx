import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './paginas/Home';


const App = () => {
  return (
    <Router>        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />       
        </Routes>
    </Router>
  )
}

export default App
