import { RouterWeb } from './RoutesWeb/index'
import { Location } from './config/config'

const App = () => {
  console.log(Location)
  return (
    <div>
      <RouterWeb />
    </div>
  )
}

export default App
