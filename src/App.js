import { NavBar } from './components/NavBar/NavBar'
import { RouterWeb } from './RoutesWeb'
import { Location } from './config/config'

const App = () => {
  console.log(Location)
  return (
    <div>
      <NavBar />
      <RouterWeb />
    </div>
  )
}

export default App
