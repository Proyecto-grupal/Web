import {
  Button,
  Col,
  Form,
  Row,
  InputGroup
} from 'react-bootstrap'

import { MdAddAPhoto } from 'react-icons/md'
import { form, Boton } from './TeacherProfileStyle'

export const TeacherProfileView = () => {
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
        </Form>
      </div>
      <Row className='m-2'>
        <Col style={form}>
          <h1>Perfil Profesor</h1>
        </Col>
      </Row>
      <div style={form} className=' w-100'>
        <Form className='m-5 w-50'>
          <Form.Group className='mb-3'>
            <Row>
              <Col>
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control type='date' placeholder='Ingrese su Fecha de Nacimiento' />
              </Col>
              <Col>
                <Form.Label>Documento de identidad</Form.Label>
                <Form.Control type='number' placeholder='Ingrese su Documento de identidad' />
              </Col>
            </Row>
          </Form.Group >
          <Form.Group style={form} className='mb-3'>
            <Row className='w-50'>
              <Col >
                <Form.Label>Tecnologias que deseas enseñar</Form.Label>
                <Form.Control type='technologies' placeholder='Tecnologias que deseas enseñar' />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Row>
              <Col>
                <Form.Label>Banco</Form.Label>
                <Form.Control type='text' placeholder='Ingrese el nombre de su banco' />
              </Col>
              <Col>
                <Form.Label>CBU</Form.Label>
                <Form.Control type='number' placeholder='Ingrese su CBU' />
              </Col>
            </Row>
          </Form.Group >
          <Row className='m-2 p-2 justify-content-center'>
            <Button style={Boton} variant='outline-success w-25'>Guardar</Button>
          </Row>
        </Form>
      </div>
    </div>
  )
}
