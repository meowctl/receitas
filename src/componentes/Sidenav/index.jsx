import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import "./Sidenav.css"

function Sidenav(props) {
    return (
        <>
            <div className={`${props.active ? "sidenav-overlay" : ""}`} style={{transition: "0.5s"}}
                 onClick={() => props.setActive(false)}></div>

            <div className="sidenav" style={{left: `${props.active ? "0" : "-250px"}`}}>
                <a href="#" className="sidenav-close" onClick={() => props.setActive(false)}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </a>
                <a href="#">Teste1</a>
                <a href="#">Teste2</a>
                <a href="#">Teste3</a>
                <a href="#">Teste4</a>
            </div>
        </>
    )
}

export default Sidenav