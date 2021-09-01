import {
  Button,
  Col,
  Form,
  Row,
  InputGroup
} from 'react-bootstrap'

import { MdAddAPhoto } from 'react-icons/md'
import { form, Boton } from './TeacherProfileStyle'

import { UseForm } from '../common/UseForm'
import { Validations } from '../common/Validations'

export const TeacherProfileView = () => {
  const {
    errors,
    values,
    onInputChange,
    handleSubmit
  } = UseForm(Validations)

  return (
    <div>
      <Row className='m-2'>
        <Col style={form}>
          <h1>Perfil Estudiante</h1>
        </Col>
      </Row>
      <div style={form} className=' w-100'>
        <Form
          className='m-5 w-50'
          onChange={handleSubmit}
        >
          <Form.Group className='mb-3'>
            <Row>
              <Col>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingrese su nombre'
                  name={values.name}
                  onChange={e => onInputChange(e)}
                />
              </Col>
              <Col>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type='lastname'
                  placeholder='Ingrese su apellido'
                  name={values.lastname}
                  onChange={e => onInputChange(e)}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Row>
              <Col>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  as='textarea' rows={3}
                  name={values.description}
                  onChange={e => onInputChange(e)}
                />
              </Col>
              <Col>
                <Form.Label>Imagen del perfil</Form.Label>
                <InputGroup.Text
                  type='img'
                  className='bg-white w-25 justify-content-center'
                  name={values.image}
                  onChange={e => onInputChange(e)}
                >
                  <MdAddAPhoto size={75} />
                </InputGroup.Text>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Row>
              <Col>
                <Form.Label>Pais</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingrese su pais'
                  name={values.country}
                  onChange={e => onInputChange(e)}
                />
              </Col>
              <Col>
                <Form.Label>Tecnologias que deseas aprender</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Tecnologias que deseas aprender'
                  name={values.learn}
                  onChange={e => onInputChange(e)}
                />
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
        <Form
          className='m-5 w-50'
          onChange={handleSubmit}
        >
          <Form.Group className='mb-3'>
            <Row>
              <Col>
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control
                  type='date'
                  placeholder='Ingrese su Fecha de Nacimiento'
                  name={values.birthday}
                  onChange={e => onInputChange(e)}
                />
              </Col>
              <Col>
                <Form.Label>Documento de identidad</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Ingrese su Documento de identidad'
                  name={values.identification}
                  onChange={e => onInputChange(e)}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group style={form} className='mb-3'>
            <Row className='w-50'>
              <Col>
                <Form.Label>Tecnologias que deseas ofrecer</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Tecnologias que deseas ofrecer'
                  name={values.teach}
                  onChange={e => onInputChange(e)}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Row>
              <Col>
                <Form.Label>Banco</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingrese el nombre de su banco'
                  name={values.bank}
                  onChange={e => onInputChange(e)}
                />
              </Col>
              <Col>
                <Form.Label>CBU</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Ingrese su CBU'
                  name={values.cbu}
                  onChange={e => onInputChange(e)}
                />
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
