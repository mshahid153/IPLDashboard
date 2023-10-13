import {Route, Switch} from 'react-router-dom'
import React from "react"

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
