import { useNavigate, useParams } from "react-router-dom";
import "./Artigo.css"
import Conteudo from "../Conteudo";
import NotFound from "../NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Artigo(props) {
    const navigate = useNavigate();
    const params = useParams();
    let [editMode, setEditMode] = useState(false);
    let [artigoConteudo, setArtigoConteudo] = useState(null);

    let artigoTipo = null;
    let artigo = null;

    for (const [tipo, artigos] of Object.entries(props.receitasData.artigos)) {
        let artigoFind = artigos.find((artigo) => artigo.id === params.id);
        if (artigoFind !== undefined) {
            artigoTipo = tipo;
            artigo = artigoFind;
            break;
        }
    }

    if (!artigo) {
        if (!props.receitasData.loaded) {
            return <Conteudo items={[]} />;
        }
        return <NotFound />
    }

    function editar() {
        if (artigoConteudo !== null) {
            artigo.conteudo = artigoConteudo;
        }
        setEditMode(false);
    }

    function deletar() {
        props.receitasData.artigos[artigoTipo] = props.receitasData.artigos[artigoTipo].filter(
            (outroArtigo) => outroArtigo.id !== artigo.id
        );
        navigate("/");
    }

    let items = [];
    if (artigo.imagem !== null) {
        items.push(
            <img key={0} src={artigo.imagem} className="artigo-imagem" />
        );
    }
    items.push(<h2 key={1}>{artigo.titulo}</h2>);
    items.push(
        <div key={2} className="artigo-body">
            {editMode ?
                <>
                    <textarea defaultValue={artigo.conteudo} onChange={(e) => setArtigoConteudo(e.target.value)}></textarea>
                    <button className="edit-btn" onClick={() => editar()}>Confirmar edición</button>
                </>
            :
                <span dangerouslySetInnerHTML={{__html: artigo.conteudo}}></span>}
        </div>
    );
    items.push(
        <div key={4} className="artigo-edit">
            <FontAwesomeIcon icon={faPencil} style={{cursor: "pointer"}} onClick={() => setEditMode(!editMode)} /> &nbsp;
            <FontAwesomeIcon icon={faTrash} style={{cursor: "pointer"}} onClick={deletar} />
        </div>
    );

    return (
        <Conteudo items={items} />
    )
}

export default Artigo