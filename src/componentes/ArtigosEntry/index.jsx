import { Link } from "react-router-dom"
import "./ArtigosEntry.css"

function ArtigosEntry(props) {
    return (
        <div className="artigos-entry">
            <Link to={props.id} className="entry-image" style={{
                backgroundImage: `url(${props.imagem})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}></Link>
            <span className="entry-title">
                <Link to={props.id}>{props.titulo}</Link>
            </span>
        </div>
    )
}

export default ArtigosEntry