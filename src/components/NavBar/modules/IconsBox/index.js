import { Col, Container } from 'react-bootstrap'
import { CartIcon } from './cartIcon'
import { HeartIcon } from './heartIcon'
import { BellIcon } from './bellIcon'
import { UserIcon } from './userIcon'
import { IconContainer } from '../../NavBarStyle'

export const IconsBox = () => {
  return (
    <Col xs={12} sm={12} lg={2}>
      <Container style={IconContainer}>
        <CartIcon />
        <HeartIcon />
        <BellIcon />
        <UserIcon />
      </Container>
    </Col>
  )
}
