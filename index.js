import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Ingredients from './modules/Ingredients'
import Instructions from './modules/Instructions'
import Home from './modules/Home'

render((
  <Router history={browserHistory}>
    <Route path="/experiments/soup-recipe/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/experiments/soup-recipe/ingredients" component={Ingredients}/>
      <Route path="/experiments/soup-recipe/instructions" component={Instructions}/>
    </Route>
  </Router>
), document.getElementById('app'))
