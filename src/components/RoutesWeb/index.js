import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'

export default function RouterWeb() {
    return (
       <Switch>
           <Route exact path="/" component={Home} />
       </Switch>
    )
}
