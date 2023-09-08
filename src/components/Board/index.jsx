import React, { useState } from 'react'
import Square from '../Square'

const Board = (props) => {
    const [values, setValues] = useState(['empty2','empty3','empty4','empty5','empty6','empty7','empty8','empty9','empty0'])


    const uniqueIds = ["id_1", "id_2", "id_3", "id_4", "id_5", "id_6", "id_7", "id_8", "id_9"]


    const [player, setPlayer ] = useState("X")
    
    const handleClick = (indexOfClicked) =>{
    console.log("square clicked", indexOfClicked);

    let copyOfState = [...values];
    copyOfState[indexOfClicked] = player;
    setValues(copyOfState);
    let newPlayer = player === "X" ? "O" : "X";
    setPlayer(newPlayer);
}

    const squaresJSX = values.map((valueString, index) => {
        return(
            <Square
             index = {index} 
             value={valueString} 
             handleClick={handleClick }
             key={uniqueIds[index]} 
             />
        )
         
    })

  return (
    <div className="board">
        {squaresJSX}
    </div>
  )
}

export default Board