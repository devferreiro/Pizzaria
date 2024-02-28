import React from 'react'
import './TelaSobre.css'
import Gallery from './Bootstrap/Gallery'


const TelaSobre = () => {
  return (
    <div className='container__sobre container-fluid'>
        <div className="row ABOUT 
        justify-content-evenly">
            {/* CONTEUDO - SOBRE */}
            <div className="
            col-lg-4
            px-lg-0
            text-lg-left
            
            col-8
            px-5
            py-4">
                <div className="conteudo__sobre">
                    <h2 className='text-center'>Quem Somos?</h2>
                    <p className="h3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nam eum a optio voluptates temporibus quas id voluptate ullam perferendis in rem, pariatur ipsa dignissimos quos, hic numquam dolorum iure.
                    </p>
                    <h2 className='text-center'>O que fazemos</h2>
                    <p className="h3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ullam quod provident. Vitae, quibusdam magnam ut cum et, illum illo aspernatur, soluta neque libero sequi? Hic distinctio ipsa libero nihil?</p>
                </div>
                
            </div>
            {/* CONTEUDO - GALERIA */}
            <div className="Gallery
            col-lg-5
            px-lg-0
            
            col-md-6
            d-md-block
            
            d-none">

            <Gallery />
            </div>
        </div>

    </div>
  )
}

export default TelaSobre