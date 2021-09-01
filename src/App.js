import axios from 'axios'
import { ApiURL, Location } from './config/config'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBestLessons } from './redux/actions'
import { NavBar } from './components/NavBar/NavBar'
import { RouterWeb } from './RoutesWeb'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${ApiURL}/lesson/best/6`)
      dispatch(getBestLessons(response.data))
    }
    fetchData()

    console.log(Location)
  }, [dispatch])

  return (
    <div>
      <NavBar />
      <RouterWeb />
    </div>
  )
}

export default App
