import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Col
} from 'react-bootstrap'

import { Style } from './SearchBarStyle'

export const SearchBarView = () => {
  return (
    <Container>
      <Col sm={10} md={8} lg={6}>
        <InputGroup style={Style} size='lg'>
          <div className='m-2 p-3 w-75'><FormControl classname='rounded-3 m-2' placeholder='Busca tu curso Online' /></div>
          <div className='m-2 p-3'><Button variant='outline-success'>Buscar</Button></div>
        </InputGroup>

      </Col>
    </Container>
  )
}
