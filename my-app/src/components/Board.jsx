import React, { useState } from 'react'
import Square from './Square'
function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const handleOnclick = (index) => {
        if(state[index] !== null){
            alert('Already filled');
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? 'X' : 'O';
        setState(copyState);
        setIsXTurn(!isXTurn);
        console.log(copyState);
    }
    const checkWinner = ()=>{
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for( let logic of winnerLogic){
            const [a, b, c] = logic;
            if(state[a]!== null && state[a] === state[b] && state[a] === state[c]){
                return true;
            }
        }
        return false;
        
    };

    const isWinner = checkWinner();
  return (
    <div className='board-container'>
        {isWinner ? <><h1>Winner is : {isXTurn ? 'O' : 'X'}</h1><button onClick={()=>setState(Array(9).fill(null))}>Play Again</button></> : <>
        <h4>player {isXTurn ? 'X' : 'O'} please move</h4>
        <div className='board-row'>
            <Square onClick={() => handleOnclick(0)} value={state[0]}/>
            <Square onClick={() => handleOnclick(1)} value={state[1]}/>
            <Square onClick={() => handleOnclick(2)} value={state[2]}/>
        </div>
        <div className='board-row'>
            <Square onClick={() => handleOnclick(3)} value={state[3]}/>
            <Square onClick={() => handleOnclick(4)} value={state[4]}/>
            <Square onClick={() => handleOnclick(5)} value={state[5]}/>
        </div>
        <div className='board-row'>
            <Square onClick={() => handleOnclick(6)} value={state[6]}/>
            <Square onClick={() => handleOnclick(7)} value={state[7]}/>
            <Square onClick={() => handleOnclick(8)} value={state[8]}/>
        </div>
        </>}
    </div>
  )
}

export default Board