import "./Cabecalho.css"

function Cabecalho() {
    return (
        <div className="cabecalho">
            <div style={{width: "100%", textAlign: "left"}}>menu</div>
            <div style={{width: "100%", textAlign: "center"}}>receitas</div>
            <div style={{width: "100%", textAlign: "right"}}>pesquisa</div>
        </div>
    )
}

export default Cabecalho