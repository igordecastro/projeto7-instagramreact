import React from "react";

export default function Usuario(props) {

    let nomeInicial = "Catana"
    let [nome, setNome] = React.useState(nomeInicial);
    let [imagem, setImagem] = React.useState(props.enderecoImagem);

    function trocarFoto() {
        let linkFoto = prompt("Coloque aqui o link da nova imagem");

        if (linkFoto === "" || linkFoto === null) {
            setImagem(props.enderecoImagem);
        } else {
            setImagem(linkFoto);
        }
    }
    return (
        <div className="usuario">
            <img src={imagem} onClick = {trocarFoto} alt="Profile Picture" />
            <div className="texto">
                <strong>{props.usuario}</strong>
                <span>
                    {nome}
                    <ion-icon onClick = {() => setNome(prompt("Você quer alterar para qual nome?"))} name="pencil"></ion-icon>
                </span>
            </div>
        </div>)
}