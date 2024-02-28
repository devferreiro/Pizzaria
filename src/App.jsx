
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';

//importando telas
import MenuHamburguer from './components/Bootstrap/MenuHamburguer'
import TelaPrincipal from './components/TelaPrincipal';
import Cabecalho from './components/Cabecalho'
import TelaMenu from './components/TelaMenu';
import Footer from './components/Footer'
import TelaSobre from './components/TelaSobre';

function App() {

  const [currentPage, setCurrentPage] = useState('Menu')

  const handleMenuPage = () =>{
    setCurrentPage('Menu')
    console.log(currentPage)
  }
  const handleAboutPage = () =>{
    setCurrentPage('About')
    console.log(currentPage)
  }
  

  return (
    <div className='App'>
      <Cabecalho 
      onMenuClick={handleMenuPage}
      onAboutClick={handleAboutPage}/>
      <TelaPrincipal 
      onMenuClick={handleMenuPage}
      onAboutClick={handleAboutPage}/>

      
      {currentPage === 'Menu' && <TelaMenu />}
      {currentPage === 'About' && <TelaSobre />}
      <Footer />

    </div>
  )
}

export default App
