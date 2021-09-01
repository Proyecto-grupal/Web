import { Navbar, Container } from 'react-bootstrap'
import { LogoBox } from './modules/LogoBox'
import { DropCategories } from './modules/DropCategories'
import { Explore } from './modules/ExploreBox'
import { IconsBox } from './modules/IconsBox'
import { NavContainer } from './NavBarStyle'

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' style={NavContainer}>
      <Container>
        <LogoBox />
        <DropCategories />
        <Explore />
        <IconsBox />
      </Container>
    </Navbar>
  )
}
