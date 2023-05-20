import './Game.css'

const Cell = ()=>{
    return(
        <div className="Game-cell"></div>
    )
}


const Game=() => {
    return(
        <section className="Game">
            
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>

        </section>
    )

}
export {Game};