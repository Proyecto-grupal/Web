import { Container, Button, Col, Row, FormControl, InputGroup } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi'
import { GrGoogle } from 'react-icons/gr'

import { Style, container, botton } from './LoginStyle'

export const LoginView = () => {
  return (
    <div>
      <Container >
        <Row style={Style}>
          <Col style={container}>
            <div><img width='300px' heigth='400px' alt="imagen no encontrada" src='https://images.unsplash.com/photo-1619912947529-b52b11ed92a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2F0b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' /></div>
          </Col>
          <Col lg={6} md={8} sm={10}>
            <Row style={container}>
              <h1 className='d-flex  m-3 justify-content-center'>Iniciar Sesion</h1>
              <h6 className='d-flex m-3 text-center'>
                Podemos invitarte a tu correo un codigo de verificacion para
                iniciar sesion o puedes hacerlo con tu cuenta de Google
              </h6>
              <InputGroup size='md' className='d-flex m-2'>
                <InputGroup.Text id='e-mail' className='bg-white'>
                  <HiOutlineMail size={30} />
                </InputGroup.Text>
                <FormControl
                  aria-label='E-mail'
                  placeholder='Ingresa tu E-mail'
                />
              </InputGroup>
              <div className='m-3 w-75'>
                <Button style={botton} variant='outline-warning text-white pl-1 pr-1 w-100'><HiOutlineMail size={25} className='text-white' />Enviar</Button>
              </div>
              <h4 className='m-1 text-center'> O </h4>
              <div className='m-3 w-75'>
                <Button style={botton} variant='outline-warning text-white w-100'><GrGoogle size={20} className='m-1 text-white' />Ingresar con Google</Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
