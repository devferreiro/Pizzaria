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
    <div className="d-flex p-5">

    <div>
    <style>
      {`
        .Hamburguer{
          padding: 2rem;
          background-color: var(--color-yellow-pizza);
          color: var(--color-dark);
          margin: 0;

        }
        .ancora__cabecalho{
          padding: 1rem;
          background-color: black;
          color: var(--color-background);
          border-radius: .7rem;
          margin: .3rem; 
        }
        


      `}
    </style>
    </div>

      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle className='Hamburguer' caret><i class="material-icons">menu</i>
        </DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem className='a__header' header>Andre Dias</DropdownItem>
          <DropdownItem divider />
          <DropdownItem divider />
          <DropdownItem><a onClick={targetBlank} href="https://www.linkedin.com/in/andre-ferreiro" className="ancora__cabecalho">Linkedin</a></DropdownItem>
          <DropdownItem divider />
          <DropdownItem divider />
          <DropdownItem divider />
          <DropdownItem divider />
          <DropdownItem><a onClick={targetBlank} href="https://github.com/devferreiro" className="ancora__cabecalho">GitHub</a></DropdownItem>
          <DropdownItem divider />
          <DropdownItem divider />
          <DropdownItem divider />
          <DropdownItem><a onClick={targetBlank} href="https://www.wa.me/55999397555" className="ancora__cabecalho">WhatsApp</a></DropdownItem>
          <DropdownItem divider />
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

Example.propTypes = {
  direction: PropTypes.string,
};

export default Example;