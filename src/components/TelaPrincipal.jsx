import './TelaPrincipal.css'


//importando fotos
import Pizza from '../images/Pizza_2.png'



const TelaPrincipal = ({onMenuClick, onAboutClick}) => {

  const targetBlank = (e) =>{
    e.preventDefault()
    window.open(e.target.href, '_blank')
  }

  return (
    <div className='container__main container-fluid' id='home'>
      {/* primeiro container */}
      <div className="conteudo 
      row
       
      justify-content-xl-center

      justify-content-lg-between
      ">
    {/* CONTEUDO - IMAGEM */}
    <div className="container__comida 
    m-xl-auto 
    col-xl-4 

    col-lg-4     
    text-lg-start

    text-md-center
    ">
      <img className="comida" src={Pizza} alt="" />
    </div>
    {/*CONTEUDO - TEXTO */}
    <div className="container__descricao  
    col-xl-4 
    text-xl-start
    m-xl-auto

    col-lg-4 
    text-lg-center
    mx-lg-5

    text-md-center

    text-center
    my-5


    ">
      <h3>experimente o sabor caseiro <br />mais gostoso da região</h3>
      <h1><span>O MELHOR <br />& <br />MAIS SABOROSO <br /> DA REGIAO</span></h1>
      <div className="link justify-content-md-evenly">
        <a onClick={targetBlank} href="https://wa.me/5562999397555" className="link__direcional">Pedir agora</a>
        <button onClick={onMenuClick} className="link__direcional d-sm-none" >Menu</button>
        <button onClick={onAboutClick} className="link__direcional d-sm-none" >Sobre</button>
        <a onClick={targetBlank} href="#" className="link__direcional">Veja mais</a>
      </div>
    </div>
  </div>
      
      <div className="row justify-content-around atrativo">
        <div className="
        col-xl-4
        d-lg-inline
        text-center
        
        d-md-none
        ">
          <h4>TEXTO</h4>
          <h2>Por que nós?</h2>
        </div>
      </div>

      
    </div>
  )
}

export default TelaPrincipal