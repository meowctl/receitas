import "./Destaques.css"

function Destaques() {
    return (
        <div className="destaques flex-destaques">
            <div className="flex-destaques flex-destaques-vertical">
                <div className="destaque-item">
                    <span>Imagem 1</span>
                </div>
            </div>
            <div className="flex-destaques flex-destaques-vertical">
                <div className="destaque-item">
                    <span>Imagem 2</span>
                </div>
                <div className="destaque-item">
                    <span>Imagem 3</span>
                </div>
            </div> 
        </div>
    )
}

export default Destaques