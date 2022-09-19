import React, { useEffect } from "react";

let data = [{profile: "meowed", post: "gato-telefone", liked: "respondeai", qtdLikes: 101523},
            {profile: "barked", post: "dog", liked: "adorable_animals", qtdLikes: 200541 }];

function Post(props) {

    let [curtido, setCurtido] = React.useState(false);
    let [salvo,setSalvo] = React.useState(false);
    let [likes, setLikes] = React.useState(props.qtdLikes);

    function contarLikes() {
        if (curtido) {
            setLikes(props.qtdLikes + 1)
        } else setLikes(props.qtdLikes)
    }

    useEffect(() => {
        contarLikes();
    }, [curtido]);

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={`./assets/${props.profile}.svg`} alt ="profile picture"/>
                    {props.profile}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div onClick={() => setCurtido(true)} className="conteudo"> 
                <img src={`./assets/${props.post}.svg`} alt = "Post"/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon onClick = {() => setCurtido(!curtido)} name={curtido ? "heart" : "heart-outline"}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick = {() => setSalvo(!salvo)} name={salvo ? "bookmark" : "bookmark-outline"}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={`./assets/${props.liked}.svg`} />
                    <div className="texto">
                        Curtido por <strong>{props.liked}</strong> e <strong>outras {likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>)
}

export default function Posts() {
    return (
        <div className="posts">
            {data.map((d) => <Post profile = {d.profile} post = {d.post} liked = {d.liked} qtdLikes={d.qtdLikes}/>)}
        </div>)
}