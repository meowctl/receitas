import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./Sidenav.css"
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Sidenav(props) {
    let [sidenavData, setSidenavData] = useState([]);

    useEffect(() => {
        fetch("/dados/sidenav.json")
            .then(resp => resp.json())
            .then(data => setSidenavData(data));
    }, []);

    const navigate = useNavigate();

    const pesquisar = (e) => {
        e.preventDefault();
        props.setActive(false);
        navigate(`/pesquisar/${e.target.children[0].value}`);
    }

    return (
        <>
            <div className={`${props.active ? "sidenav-overlay" : ""}`} style={{transition: "0.5s"}}
                 onClick={() => props.setActive(false)}></div>

            <div className="sidenav" style={{left: `${props.active ? "0" : "-250px"}`}}>
                <a className="sidenav-close" onClick={() => props.setActive(false)}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </a>

                <form className="search-container" onSubmit={pesquisar}>
                    <input type="text" placeholder="Buscar" />
                    <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>

                <Link to="/">Inicio</Link>
                {sidenavData.map((item, key) =>
                    <Link to={`artigo/${item.goto}`} key={key}>{item.title}</Link>)
                }
            </div>
        </>
    )
}

export default Sidenav