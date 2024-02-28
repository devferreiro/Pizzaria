import './TelaMenu.css'
import Accordeon from './Bootstrap/Accordeon'
import Swipper from './Bootstrap/Swipper'

const TelaMenu = (

) => {
  
  return (
    <div className='container__menu container-fluid'>
        <div className='row 
        linha_1
        justify-content-evenly'>
        {/* Acordeon */}
          <div className="Lista 
          col-xl-4 
          
          col-lg-4 
          
          col-md-7
          pt-md-5
          
          col-9
          ">
            <Accordeon />
          </div>

        {/* slide */}

          <div className="slides 
          col-xl-4 
          
          col-lg-4 
          d-lg-block
          
          col-md-12
          pt-md-5

          d-none">
              <Swipper />
          </div>
        </div>


    </div>
  )
}

export default TelaMenu