import { useParams } from "react-router-dom";
import Artigos from "../Artigos";
import ArtigosEntry from "../ArtigosEntry";
import Conteudo from "../Conteudo";

function Pesquisa(props) {
    let params = useParams();

    let resultados = {
        "receitas": [],
        "extras": []
    };

    for (const [tipo, artigos] of Object.entries(props.receitasData.artigos)) {
        let artigoFind = artigos.find(
            (artigo) => artigo.titulo.toLowerCase().includes(params.query.trim().toLowerCase())
        );
        if (artigoFind != undefined) {
            let resTipo = resultados[tipo];
            if (resTipo != undefined) {
                resultados[tipo].push(artigoFind);
            }
        }
    }

    if (resultados.receitas.length == 0 && resultados.extras.length == 0) {
        return <Conteudo items={[
            <h2 key={0}>Nenhum resultado encontrado {":("}</h2>
        ]} />;
    }

    return (
        <Conteudo items={[
            <Artigos key={0} artigos={
                resultados.receitas.map(
                    (artigo, key) => <ArtigosEntry id={artigo.id} titulo={artigo.titulo} key={key} imagem={artigo.imagem} />
                )
            } extras={
                resultados.extras.map(
                    (extra, key) => <ArtigosEntry id={extra.id} titulo={extra.titulo} key={key} imagem={extra.imagem} />
                )
            } />
        ]} />
    )
}

export default Pesquisa