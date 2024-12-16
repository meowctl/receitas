import { useEffect, useState } from "react"
import Destaque from "../Destaque"
import Destaques from "../Destaques"
import Artigos from "../Artigos";
import ArtigosEntry from "../ArtigosEntry";
import Conteudo from "../Conteudo";

function Home() {
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
        <Conteudo items={[
            <Destaques key={0} destaques={
                receitasData.destaques.map(
                    (destaque, key) => <Destaque titulo={destaque.titulo} key={key} imagem={destaque.imagem} />
                )
            } />,
            <Artigos key={1} artigos={
                receitasData.receitas.map(
                    (artigo, key) => <ArtigosEntry titulo={artigo.titulo} key={key} imagem={artigo.imagem} />
                )
            } />
        ]} />
    )
}

export default Home