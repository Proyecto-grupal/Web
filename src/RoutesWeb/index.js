import { Route, Switch } from 'react-router-dom'
import { Login } from '../components/Login/Login'
import { Home } from '../components/Home/Home'

export const RouterWeb = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
    </Switch>
  )
}
