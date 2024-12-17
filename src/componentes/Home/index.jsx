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
                    (destaque, key) => <Destaque id={destaque.goto} titulo={destaque.titulo} key={key} imagem={destaque.imagem} />
                )
            } />,
            <Artigos key={1} artigos={
                props.receitasData.artigos.receitas.map(
                    (artigo, key) => <ArtigosEntry id={artigo.id} titulo={artigo.titulo} key={key} imagem={artigo.imagem} />
                )
            } extras={
                props.receitasData.artigos.extras.map(
                    (extra, key) => <ArtigosEntry id={extra.id} titulo={extra.titulo} key={key} imagem={extra.imagem} />
                )
            } />
        ]} />
    )
}

export default Home