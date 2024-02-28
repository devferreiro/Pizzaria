import './Cabecalho.css'

//importando accordion
import MenuHamburguer from './Bootstrap/MenuHamburguer'


//importando imagens
import Logo from '../images/LogoCoringa.png'
import zapIcon from '../images/whats.png'
import instaIcon from '../images/insta.png'

const Cabecalho = ({onMenuClick, onAboutClick}) => {
  return (
    <div className='container__cabecalho'>
      <div className="row 
      justify-content-between">
        {/* LOGO */}
        <div className="logo 
        col-lg-3
        col-3">
          <a href="#home">
          <img src={Logo} alt="" />
          </a>
        </div>

        {/* BOTOES (Largura < lg) */}
        <div className="botao
        justify-content-between
        d-none

        col-sm-4 
        

        d-sm-flex
        d-lg-none">
          <button className='botao__cabecalho' onClick={onAboutClick}>SOBRE</button>
          <button className='botao__cabecalho' onClick={onMenuClick}>Menu</button>
        </div>

        {/* BOTOES (Largura >= lg(large)) */}
        <div className="botao 
        col-lg-6
        d-lg-flex
        d-lg-block

        
        d-none">
          <button type="button" className="botao__cabecalho"
          onClick={onMenuClick}>MENU</button>
          <button type="button" className="botao__cabecalho"
          onClick={onAboutClick}>SOBRE</button>
          <button type="button" className="botao__cabecalho">CONTATOS</button>
        </div>

        {/* ICONES DE CONTATO (Largura >= lg(large)) */}
        <div className="contatos 
        col-lg-3
        d-lg-flex
        d-lg-block
        
        d-none">
          <img src={instaIcon} alt="" />
          <img src={zapIcon} alt="" />
        </div>


        {/* ICONES DE CONTATO (Largura < lg(large)) */}
        <div className="menuHamburguer
        justify-content-end 
        col-3
        

        col-lg-3
        d-lg-none">
          <MenuHamburguer />
        </div>
      </div>
    </div>
  )
}

export default Cabecalho