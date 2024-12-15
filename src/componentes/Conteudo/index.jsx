import { useEffect, useState } from "react"
import Destaque from "../Destaque"
import Destaques from "../Destaques"
import ListaDeTarefas from "../ListaDeTarefas"
import "./Conteudo.css"

function Conteudo() {
    let [receitasData, setReceitasData] = useState({
        "destaques": [],
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

            <ListaDeTarefas />
        </div>
    )
}

export default Conteudo