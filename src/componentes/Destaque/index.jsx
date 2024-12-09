import "./Destaque.css"

function Destaque(props) {
    return (
        <div className="destaque-item" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${props.imagem})`,
            backgroundPosition: "center, center",
            backgroundSize: "cover",
        }}>
            <span>{props.titulo}</span>
        </div>
    )
}

export default Destaque