import "./Cabecalho.css"

function Cabecalho() {
    return (
        <div className="cabecalho">
            <div className="cabecalho-itens">
                <div style={{textAlign: "left"}}>MENU</div>
                <div style={{textAlign: "center"}}>RECEITAS</div>
                <div style={{textAlign: "right"}}>PESQUISA</div>
            </div>
        </div>
    )
}

export default Cabecalho