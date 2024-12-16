import { useEffect, useState } from "react"
import Destaque from "../Destaque"
import Destaques from "../Destaques"
import Artigos from "../Artigos";
import ArtigosEntry from "../ArtigosEntry";
import Conteudo from "../Conteudo";

function Home(props) {
    return (
        <Conteudo items={[
            <Destaques key={0} destaques={
                props.receitasData.destaques.map(
                    (destaque, key) => <Destaque titulo={destaque.titulo} key={key} imagem={destaque.imagem} />
                )
            } />,
            <Artigos key={1} artigos={
                props.receitasData.receitas.map(
                    (artigo, key) => <ArtigosEntry titulo={artigo.titulo} key={key} imagem={artigo.imagem} />
                )
            } />
        ]} />
    )
}

export default Home