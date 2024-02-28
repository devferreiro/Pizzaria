import React from 'react'
import './Footer.css'

import Dropdown from './Bootstrap/Dropdown'


const Footer = () => {


    return (
    <footer className='RODAPE'>
        <div className="row container-fluid rodape ">
            <div className="
            col-lg-4 
            
            col-8
            
            mx-auto 
            align-self-center">
                <p className='h6 rodape__creditos'>Desenvolvido por: André Dias de Brito Ferreira</p>
                <div className='rodape__contatos'>
                    <p className='h6 rodape__creditos'>Lista de contatos: </p> 
                    <div className='dropdown__rodape'>
                    <Dropdown direction={'up'}/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer