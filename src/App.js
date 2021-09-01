import axios from 'axios'
import { ApiURL } from './config/config'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBestLessons, getCategories } from './redux/actions'
import { NavBar } from './components/NavBar/NavBar'
import { RouterWeb } from './RoutesWeb'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const response1 = await axios.get(`${ApiURL}/lesson/best/6`)
      dispatch(getBestLessons(response1.data))
      const response2 = await axios.get(`${ApiURL}/category`)
      dispatch(getCategories(response2.data))
    }
    fetchData()
  }, [dispatch])

  return (
    <div>
      <NavBar />
      <RouterWeb />
    </div>
  )
}

export default App
