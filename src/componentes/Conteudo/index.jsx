import Destaques from "../Destaques"
import ListaDeTarefas from "../ListaDeTarefas"
import "./Conteudo.css"

function Conteudo() {
    return (
        <div id="conteudo">
            <Destaques />
            <ListaDeTarefas />
        </div>
    )
}

export default Conteudo