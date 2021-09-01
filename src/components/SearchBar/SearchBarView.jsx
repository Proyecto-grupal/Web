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
        <Col sm={12} md={10} lg={10}>
          <InputGroup size='md'>
            <InputGroup.Text id='e-mail' style={Style} className='bg-white w-100 m-6'>
              <FiSearch className='m-1' size={30} />
              <FormControl
                style={Input}
                placeholder='Profesores, tecnologias, cursos y mucho mas !'
              />
              <div className='m-2 p-2'><Button style={Boton} variant='outline-success'>Buscar</Button></div>
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Container>
    </div>
  )
}
