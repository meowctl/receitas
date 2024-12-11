import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./Cabecalho.css"
import Sidenav from '../Sidenav'

function Cabecalho() {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <Sidenav active={menuActive} setActive={setMenuActive} />

            <div className="cabecalho">
                <div className="cabecalho-itens">
                    <div style={{textAlign: "left"}}>
                        <span onClick={() => setMenuActive(true)} style={{cursor: "pointer"}}>
                            <FontAwesomeIcon icon={faBars} /> MENU
                        </span>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <span>RECETAS</span>
                    </div>
                    <div style={{textAlign: "right"}}>
                        <span><FontAwesomeIcon icon={faMagnifyingGlass} /> BUSCAR</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cabecalho