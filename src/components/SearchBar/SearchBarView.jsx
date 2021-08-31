import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Col
} from 'react-bootstrap'

import { FiSearch } from 'react-icons/fi'
import { Style, Boton, Input, Contenedor } from './SearchBarStyle'

export const SearchBarView = () => {
  return (
    <div style={Contenedor}>
      <Container>
        <Col sm={12} md={10} lg={8}>
          <InputGroup style={Style}>
            <FiSearch className='m-4' size={35} /><FormControl style={Input} placeholder='Profesores, tecnologias, cursos y mucho mas' />
            <div className='m-3 p-3'><Button style={Boton} variant='outline-success'>Buscar</Button></div>
          </InputGroup>
        </Col>
      </Container>
    </div>
  )
}

{ /* <div className='m-2 p-3 w-75'><FormControl classname='rounded-6 m-3' placeholder='Profesores, tecnologias, cursos y mucho mas' /></div>
<div className='m-2 p-3 w-40'><Button variant='outline-success'>Buscar</Button></div> */ }
