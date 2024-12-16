import Home from "./componentes/Home"
import "./App.css"
import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./componentes/Layout"
import { useEffect, useState } from "react"

function App() {
  let [receitasData, setReceitasData] = useState({
    "destaques": [],
    "receitas": [],
  });

  useEffect(() => {
    fetch("/dados/receitas.json")
      .then(resp => resp.json())
      .then(data => setReceitasData(data));
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home receitasData={receitasData} />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
