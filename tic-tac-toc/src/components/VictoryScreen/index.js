import "./VictoryScreen.css";

const VictoryScreen = ({winPlayer, onClickReplay}) => {
    return(
        <article className="VictoryScreen">
            <div className="VictoryScreen-box">
                <h2 className="VictoryScreen-title">{winPlayer.length === 1 ? "Winner:": "Sorry"}</h2>
                <p className="VictoryScreen-player">{winPlayer.length === 1 && "Player: "}{winPlayer}</p>
                <button onClick={onClickReplay} className="VictoryScreen-replay"> Play Again</button>
            </div>
        </article>
    )
}

export {VictoryScreen}