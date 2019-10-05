import React from "react"
import "./App.scss"
import HomePage from "./pages/HomePage"
import { Switch, Route, Link } from "react-router-dom"
import Shop from "./pages/Shop"

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
