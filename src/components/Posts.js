let data = [{profile: "meowed", post: "gato-telefone", liked: "respondeai"},
            {profile: "barked", post: "dog", liked: "adorable_animals"}];

function Post(props) {
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

            <div className="conteudo">
                <img src={`./assets/${props.post}.svg`} alt = "Post"/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={`./assets/${props.liked}.svg`} />
                    <div className="texto">
                        Curtido por <strong>{props.liked}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>)
}

export default function Posts() {
    return (
        <div className="posts">
            {data.map((d) => <Post profile = {d.profile} post = {d.post} liked = {d.liked}/>)}
        </div>)
}