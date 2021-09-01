import { Route, Switch } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { Login } from '../components/Login/Login'
import { LoginCheck } from '../components/LoginCheck/LoginCheck'

export const RouterWeb = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/login/check' component={LoginCheck} />
    </Switch>
  )
}
