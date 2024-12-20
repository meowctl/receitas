import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./Cabecalho.css"
import Sidenav from '../Sidenav'
import { Link } from 'react-router-dom'

function Cabecalho() {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <Sidenav active={menuActive} setActive={setMenuActive} />

            <div className="cabecalho">
                <div className="cabecalho-itens">
                    <div style={{textAlign: "left"}}>
                        <span onClick={() => setMenuActive(true)} className="pad" style={
                            {cursor: "pointer", fontSize: "17px", paddingRight: "10px"}
                        }>
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <Link to="/" className="pad">SABORES DE COLOMBIA</Link>
                    </div>
                    <div style={{textAlign: "right"}}>
                        { /* <span><FontAwesomeIcon icon={faMagnifyingGlass} /> BUSCAR</span> */ }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cabecalho