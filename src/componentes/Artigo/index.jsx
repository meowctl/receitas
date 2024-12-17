import { Navigate, useParams } from "react-router-dom";
import "./Artigo.css"
import Conteudo from "../Conteudo";
import NotFound from "../NotFound";

function Artigo(props) {
    let params = useParams();
    let artigo = null;

    for (const artigos of Object.values(props.receitasData.artigos)) {
        let artigoFind = artigos.find((artigo) => artigo.id == params.id);
        if (artigoFind != undefined) {
            artigo = artigoFind;
        }
    }

    if (!artigo) {
        if (!props.receitasData.loaded) {
            return <Conteudo items={[]} />;
        }
        return <NotFound />
    }

    let items = [];
    if (artigo.imagem) {
        items.push(
            <img key={0} src={artigo.imagem} className="artigo-imagem" />
        );
    }
    items.push(<h2 key={1}>{artigo.titulo}</h2>);
    items.push(<div key={2} className="artigo-body" dangerouslySetInnerHTML={{__html: artigo.conteudo}}></div>);

    return (
        <Conteudo items={items} />
    )
}

export default Artigo