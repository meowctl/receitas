import Home from "./componentes/Home"
import "./App.css"
import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./componentes/Layout"
import { useEffect, useState } from "react"
import Artigo from "./componentes/Artigo"
import NotFound from "./componentes/NotFound"

function App() {
  let [receitasData, setReceitasData] = useState({
    "loaded": false,
    "destaques": [],
    "artigos": {
      "receitas": [],
      "extras": [],
      "paginas": []
    }
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
          <Route path="artigo/:id" element={<Artigo receitasData={receitasData} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
