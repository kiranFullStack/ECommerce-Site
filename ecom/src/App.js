import React from "react"
import "./App.scss"
import Button from "@material-ui/core/Button"
import HomePage from "./pages/HomePage"
import { Switch, Route, Link } from "react-router-dom"
import Hats from "./pages/Hats"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/hats">
          <Hats />
        </Route>
      </Switch>
    </div>
  )
}

export default App
