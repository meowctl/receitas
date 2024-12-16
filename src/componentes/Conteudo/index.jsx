import { useEffect, useState } from "react"
import Destaque from "../Destaque"
import Destaques from "../Destaques"
import Artigos from "../Artigos";
import ArtigosEntry from "../ArtigosEntry";
import "./Conteudo.css"

function Conteudo() {
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
        <div id="conteudo">
            <Destaques destaques={
                receitasData.destaques.map(
                    (destaque, key) => <Destaque titulo={destaque.titulo} key={key} imagem={destaque.imagem} />
                )
            } />

            <Artigos artigos={
                receitasData.receitas.map(
                    (artigo, key) => <ArtigosEntry titulo={artigo.titulo} key={key} imagem={artigo.imagem} />
                )
            } />
        </div>
    )
}

export default Conteudo