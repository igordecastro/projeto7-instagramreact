let data = ["9gag",
            "meowed",
            "barked",
            "nathanwpylestrangeplanet",
            "wawawicomics",
            "respondeai",
            "filomoderna",
            "memeriagourmet"
            ]

function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={`assets/${props.profile}.svg`} />
            </div>
            <div className="usuario">
                {props.profile}
            </div>
        </div>
    )
}

export default function Stories() {
    return (
        <div className="stories">
            {data.map((d) => <Story profile={d} />)}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}