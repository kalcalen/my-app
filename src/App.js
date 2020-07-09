import React from "react"
import "./style/master.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
