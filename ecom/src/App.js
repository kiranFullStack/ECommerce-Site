import React from "react"
import "./App.scss"
import Button from "@material-ui/core/Button"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <HomePage />
    </div>
  )
}

export default App
