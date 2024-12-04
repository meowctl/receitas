import "./Cabecalho.css"

function Cabecalho() {
    return (
        <div className="cabecalho">
            <div style={{width: "100%", textAlign: "left"}}>MENU</div>
            <div style={{width: "100%", textAlign: "center"}}>RECEITAS</div>
            <div style={{width: "100%", textAlign: "right"}}>PESQUISA</div>
        </div>
    )
}

export default Cabecalho