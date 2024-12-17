import { Link } from "react-router-dom"
import "./Destaque.css"

function Destaque(props) {
    return (
        <Link to={`/${props.id}`} className="destaque-item" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${props.imagem})`,
            backgroundPosition: "center, center",
            backgroundSize: "cover",
        }}>
            <span>{props.titulo}</span>
        </Link>
    )
}

export default Destaque