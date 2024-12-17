import "./Artigos.css"

function Artigos(props) {
    return (
        <>
            {props.artigos && props.artigos.length > 0 ?
                <>
                    <div className="section-title">
                        <h2>Recetas</h2>
                    </div>

                    <div className="artigos">
                        {props.artigos.map((artigo) => artigo)}
                    </div>
                </>
            : ""}
            {props.extras && props.extras.length > 0 ?
                <>
                    <div className="section-title">
                        <h2>Extras</h2>
                    </div>

                    <div className="artigos">
                        {props.extras.map((extra) => extra)}
                    </div>
                </>
            : ""}
        </>
    )
}

export default Artigos