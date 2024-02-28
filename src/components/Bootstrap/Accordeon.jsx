import React, { useState } from 'react';
import './Accordeon.css'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Accordeon(props) {
    const [open, setOpen] = useState(null);
    const toggle = (id) => {
      if (open === id) {
        setOpen(null);
      } else {
        setOpen(id);
      }
    };
  
    const pizzas = [
      {id: 1, sabor: 'Pizza1', descricao: 'Descrição da Pizza1'},
      {id: 2, sabor: 'Pizza2', descricao: 'Descrição da Pizza2'},
      {id: 3, sabor: 'Pizza3', descricao: 'Descrição da Pizza3'},
      {id: 4, sabor: 'Pizza4', descricao: 'Descrição da Pizza4'},
      {id: 5, sabor: 'Pizza6', descricao: 'Descrição da Pizza5'},
      {id: 6, sabor: 'Pizza7', descricao: 'Descrição da Pizza5'},
      {id: 7, sabor: 'Pizza8', descricao: 'Descrição da Pizza5'},
      {id: 8, sabor: 'Pizza9', descricao: 'Descrição da Pizza5'},
      {id: 9, sabor: 'Pizza10', descricao: 'Descrição da Pizza5'},
      {id: 10, sabor: 'Pizza11', descricao: 'Descrição da Pizza5'},
      {id: 11, sabor: 'Pizza12', descricao: 'Descrição da Pizza5'},
      {id: 12, sabor: 'Pizza13', descricao: 'Descrição da Pizza5'},
      {id: 13, sabor: 'Pizza14', descricao: 'Descrição da Pizza5'},
    ];
  
    return (
      <div>
        <Accordion open={open} toggle={toggle}>
          {pizzas.map(pizza => (
            <AccordionItem key={pizza.id}>
              <AccordionHeader
              className="custom-accordion-header"
              targetId={pizza.id.toString()} 
              onClick={() => toggle(pizza.id.toString())}>
                {pizza.sabor}
              </AccordionHeader>
              <AccordionBody 
              className="custom-accordion-body"
              accordionId={pizza.id.toString()}>
              <p>{pizza.descricao}</p>
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }
  
  export default Accordeon;