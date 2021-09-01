import { Container, Button, Col, Row, FormControl, InputGroup } from 'react-bootstrap'
import { AiOutlineQrcode } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'

import { Style, container, botton } from './LoginCheckStyle'

export const LoginCheckView = () => {
  return (
    <div>
      <Container >
        <Row style={Style}>
          <Col style={container}>
            <div><img width='300px' heigth='400px' src='https://images.unsplash.com/photo-1619912947529-b52b11ed92a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2F0b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' /></div>
          </Col>
          <Col lg={6} md={8} sm={10}>
            <Row style={container}>
              <h1 className='d-flex  m-3 text-center'>Codigo de verificacion</h1>
              <h6 className='d-flex m-3 text-center'>
                Ingresa el codigo que hemos enviado al correo 'usuario@gmail.com' para iniciar sesion y seguir aprendiendo
              </h6>
              <InputGroup size='md' className='d-flex m-2'>
                <InputGroup.Text id='codigo' className='bg-white'>
                  <AiOutlineQrcode size={30} />
                </InputGroup.Text>
                <FormControl
                  aria-label='codigo'
                  placeholder='- - - - - -'
                />
              </InputGroup>
              <div className='m-3 w-75'>
                <Button style={botton} variant='outline-warning text-white pl-1 pr-1 w-100'><HiOutlineMail size={25} className='text-white' />Enviar</Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
