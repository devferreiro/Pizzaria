import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function Example({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);


  const targetBlank = (e) =>{
    e.preventDefault()
    window.open(e.target.href, '_blank')
  }

  
  return (
    

    <div className=" ">
      <div>
      <style>
    {`
      .Ancoras{
        color: var(--color-red-pizza);
        text-decoration: underline; 
      }
      .ancora:hover{
        background-color: var(--color-yellow-pizza);
        
      }
      .caixa{
        background-color:var(--color-yellow-pizza);
      }
      .header__dropdown{
        font-weight: bold;
        color: var(--color-dark);
      }
      .
    `}
  </style>
      </div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Contatos</DropdownToggle>
        <DropdownMenu className='caixa' {...args}>
          <DropdownItem className='header__dropdown' header>Andre Ferreira</DropdownItem>
          <DropdownItem className='ancora'><a onClick={targetBlank} className='Ancoras' href="https://www.linkedin.com/in/andre-ferreiro/">Linkedin</a></DropdownItem>
          <DropdownItem className='ancora'><a onClick={targetBlank} className='Ancoras' href="https://github.com/devferreiro">GitHub</a></DropdownItem>
          <DropdownItem className='ancora'><a onClick={targetBlank} className='Ancoras' href="https://wa.me/5562999397555">WhatsApp</a></DropdownItem>
          
         
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

Example.propTypes = {
  direction: PropTypes.string,
};

export default Example;