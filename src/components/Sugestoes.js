let data = [{perfilSugerido: "bad.vibes.memes", info: "Segue você"},
            {perfilSugerido: "chibirdart", info: "Segue você"},
            {perfilSugerido: "razoesparaacreditar", info: "Novo no Instagram"},
            {perfilSugerido: "adorable_animals", info: "Segue você"},
            {perfilSugerido: "smallcutecats", info: "Segue você"},
        ]

function Sugestao (props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={`./assets/${props.perfilSugerido}.svg`} />
                <div className="texto">
                    <div className="nome">{props.perfilSugerido}</div>
                    <div className="razao">{props.info}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
)
}

export default function Sugestoes() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {data.map((d) => <Sugestao perfilSugerido={d.perfilSugerido} info = {d.info}/>)}
        </div>)
}