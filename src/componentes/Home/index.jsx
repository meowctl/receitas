import { useEffect, useState } from "react"
import Destaque from "../Destaque"
import Destaques from "../Destaques"
import Artigos from "../Artigos";
import ArtigosEntry from "../ArtigosEntry";
import Conteudo from "../Conteudo";

function Home(props) {
    console.log(props.receitasData);

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
            } extras={
                props.receitasData.extras.map(
                    (extra, key) => <ArtigosEntry titulo={extra.titulo} key={key} imagem={extra.imagem} />
                )
            } />
        ]} />
    )
}

export default Home