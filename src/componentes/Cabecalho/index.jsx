import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./Cabecalho.css"

function Cabecalho() {
    return (
        <div className="cabecalho">
            <div className="cabecalho-itens">
                <span style={{textAlign: "left"}}>
                    <FontAwesomeIcon icon={faBars} />
                </span>
                <span style={{textAlign: "center"}}>RECEITAS</span>
                <span style={{textAlign: "right"}}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
            </div>
        </div>
    )
}

export default Cabecalho