import "./ArtigosEntry.css"

function ArtigosEntry(props) {
    return (
        <div className="artigos-entry">
            <a className="entry-image" href="#" style={{
                backgroundImage: `url(${props.imagem})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}></a>
            <span className="entry-title">
                <a href="#"><h3>{props.titulo}</h3></a>
            </span>
        </div>
    )
}

export default ArtigosEntry