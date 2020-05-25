import React from "react"
import { Router } from "@reach/router"
import Auth from "../components/Auth"
import PrivateRoute from "../components/PrivateRoute"
import Secret from "../components/Secret"


const App = () => {
  return(
    <div>
      <Router basepath="/app">
        <PrivateRoute path="/secret" component={Secret} />
        <Auth path="/login" />
      </Router>
    </div>
  )
}

export default App
