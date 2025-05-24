import React, { useState } from 'react';
import './TicTacToe.css';

import circle_icon from '../circle.png';
import cross_icon from '../cross.png';

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState('x');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] !== '' || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const result = checkWin(newBoard);
    if (result) {
      setWinner(result);
    } else {
      setTurn(turn === 'x' ? 'o' : 'x');
    }
  };

  const checkWin = (board) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6],           // Diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a]; // Return 'x' or 'o'
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setTurn('x');
    setWinner(null);
  };

  const renderIcon = (value) => {
    if (value === 'x') return <img src={cross_icon} alt="X" />;
    if (value === 'o') return <img src={circle_icon} alt="O" />;
    return null;
  };

  return (
    <div className="container">
      <h1 className="title">
        {winner ? (
          <>Congratulations: {renderIcon(winner)}</>
        ) : (
          <>Tic Tac Toe in <span>React</span></>
        )}
        <p>By Mridul</p>
      </h1>
      

      <div className="board">
        {[0, 1, 2].map((row) => (
          <div className={`row${row + 1}`} key={row}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <div
                  key={index}
                  className="boxes"
                  onClick={() => handleClick(index)}
                >
                  {renderIcon(board[index])}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};





// import React, { useState } from 'react';
// import './TicTacToe.css';

// import circle_icon from '../circle.png';
// import cross_icon from '../cross.png';

// export const TicTacToe = () => {
//   const [board, setBoard] = useState(Array(9).fill(''));
//   const [turn, setTurn] = useState('x');
//   const [winner, setWinner] = useState(null);

//   const handleClick = (index) => {
//     if (board[index] !== '' || winner) return;

//     const newBoard = [...board];
//     newBoard[index] = turn;
//     setBoard(newBoard);

//     const result = checkWin(newBoard);
//     if (result) {
//       setWinner(result);
//     } else {
//       setTurn(turn === 'x' ? 'o' : 'x');
//     }
//   };

//   const checkWin = (board) => {
//     const winPatterns = [
//       [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//       [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//       [0, 4, 8], [2, 4, 6],           // Diagonals
//     ];

//     for (let pattern of winPatterns) {
//       const [a, b, c] = pattern;
//       if (board[a] && board[a] === board[b] && board[b] === board[c]) {
//         return board[a]; // Return 'x' or 'o'
//       }
//     }
//     return null;
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(''));
//     setTurn('x');
//     setWinner(null);
//   };

//   const renderIcon = (value) => {
//     if (value === 'x') return <img src={cross_icon} alt="X" />;
//     if (value === 'o') return <img src={circle_icon} alt="O" />;
//     return null;
//   };

//   return (
//     <div className="container">
//       <h1 className="title">
//         {winner ? (
//           <>Congratulations: {renderIcon(winner)}</>
//         ) : (
//           <>Tic Tac Toe in <span>React</span></>
//         )}
//       </h1>

//       <div className="board">
//         {[0, 1, 2].map((row) => (
//           <div className={`row${row + 1}`} key={row}>
//             {[0, 1, 2].map((col) => {
//               const index = row * 3 + col;
//               return (
//                 <div
//                   key={index}
//                   className="boxes"
//                   onClick={() => handleClick(index)}
//                 >
//                   {renderIcon(board[index])}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>

//       <button className="reset" onClick={resetGame}>
//         Reset
//       </button>
//     </div>
//   );
// };
