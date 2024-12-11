import "./Destaques.css"
import "../Destaque"

function Destaques(props) {
    return (
        <div className="destaques flex-destaques">
            <div className="flex-destaques flex-destaques-vertical">
                {props.destaques.slice(0, 1).map(destaque => destaque)}
            </div>
            {props.destaques.length > 1 ?
                <div className="flex-destaques flex-destaques-vertical">
                    {props.destaques.slice(1).map(destaque => destaque)}
                </div>
            : ""}
        </div>
    )
}

export default Destaques