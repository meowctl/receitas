import Destaque from "../Destaque"
import Destaques from "../Destaques"
import ListaDeTarefas from "../ListaDeTarefas"
import "./Conteudo.css"

function Conteudo() {
    return (
        <div id="conteudo">
            <Destaques destaques={[
                <Destaque titulo="teste 1" key={1} imagem="https://i.panelinha.com.br/i1/bk-5395-cp-2019-01-03-11375.webp" />,
                <Destaque titulo="teste 2" key={2} imagem="https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2022/01/arepas-colombianas.jpg" />,
                <Destaque titulo="teste 3" key={3} imagem="https://static.itdg.com.br/images/640-440/73e6dec9467a2a9c06d6226f807c41cb/file-de-peixe-assado-1-.jpg" />,
            ]} />

            <ListaDeTarefas />
        </div>
    )
}

export default Conteudo