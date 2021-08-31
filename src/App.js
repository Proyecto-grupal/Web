import { NavBar } from './components/NavBar/NavBar'
import { RouterWeb } from './components/RoutesWeb'
import { Location } from './config/config'

const App = () => {
  return (
    <div>
      <NavBar />
      <RouterWeb />
      {Location}
    </div>
  )
}

export default App
