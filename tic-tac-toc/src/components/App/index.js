import { Game } from '../Game'
import { useState } from 'react';
const App=() => {
    const[player, setPlayer] = useState('X')
    const[table, setTable] = useState(
        [
            null, null, null, 
            null, null, null,
            null, null, null
        ]
    )

    const onClickCell = (index)=>{
        if(table[index] === null){
        const newTable = table.slice()
        newTable[index] = player
        setTable(newTable)
        player === 'X'
        ? setPlayer('0')
        : setPlayer('X')
    }
};

    return(
        <>
            <h1>Tic Tac Toc - Turn of: {player} </h1>
            <Game table={table} player={player} onClickCell={onClickCell}/>
        </>
    )

}
export {App};