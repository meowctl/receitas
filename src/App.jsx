import Home from "./componentes/Home"
import "./App.css"
import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./componentes/Layout"


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
