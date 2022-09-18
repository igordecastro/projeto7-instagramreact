export default function Usuario(props) {
    return (
        <div className="usuario">
            <img src={props.enderecoImagem} alt="Profile Picture"/>
            <div className="texto">
                <strong>{props.usuario}</strong>
                <span>
                    Catana
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>)
}