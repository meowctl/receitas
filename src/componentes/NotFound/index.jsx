import Conteudo from "../Conteudo"

function NotFound() {
    return (
        <Conteudo items={[
            <h1 key={0}>404</h1>,
            <h2 key={1}>Página no encontrada {":("}</h2>
        ]} />
    )
}

export default NotFound