import { RouterWeb } from './RoutesWeb/'
import { Location } from './config/config'

const App = () => {
  return (
    <div>
      <RouterWeb />
      {Location}
    </div>
  )
}

export default App
