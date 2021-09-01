import {
  Button,
  Col,
  Form,
  Row,
  InputGroup
} from 'react-bootstrap'

import { MdAddAPhoto } from 'react-icons/md'
import { form, Boton } from './StudentProfileStyle'

export const StudentProfileView = () => {
  return (
    <div>
      <Row className='m-2'>
        <Col style={form}>
          <h1>Perfil Estudiante</h1>
        </Col>
      </Row>
      <div style={form} className=' w-100'>
        <Form className='m-5 w-50'>
          <Form.Group className='mb-3'>
            <Row>
              <Col>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='name' placeholder='Ingrese su nombre' />
              </Col>
              <Col>
                <Form.Label>Apellido</Form.Label>
                <Form.Control type='lastname' placeholder='Ingrese su apellido' />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Row>
              <Col>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as='textarea' rows={3} />
                <Form.Label>Descripcion</Form.Label>
              </Col>
              <Col>
                <Form.Label>Imagen del perfil</Form.Label>
                <InputGroup.Text id='codigo' className='bg-white w-25 justify-content-center'>
                  <MdAddAPhoto size={75} />
                </InputGroup.Text>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Row>
              <Col>
                <Form.Label>Pais</Form.Label>
                <Form.Control type='country' placeholder='Ingrese su pais' />
              </Col>
              <Col>
                <Form.Label>Tecnologias que me interesan aprender</Form.Label>
                <Form.Control type='technologies' placeholder='Tecnologias que me interesan aprender' />
              </Col>
            </Row>
          </Form.Group>
          <Row className='m-2 p-2 justify-content-center'>
            <Button style={Boton} variant='outline-success w-25'>Guardar</Button>
          </Row>
        </Form>
      </div>
    </div>
  )
}
