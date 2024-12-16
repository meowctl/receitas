import "./Conteudo.css"

function Conteudo(props) {
    return (
        <div id="conteudo">
            {props.items.map((item) => item)}
        </div>
    )
}

export default Conteudo