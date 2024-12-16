import "./Artigos.css"

function Artigos(props) {
    return (
        <div className="artigos">
            {props.artigos.map((artigo) => artigo)}
        </div>
    )
}

export default Artigos