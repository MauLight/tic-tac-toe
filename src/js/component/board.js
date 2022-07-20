import React, { useState, useEffect } from "react";

const Board = (props) => {
    useEffect(() => {
        props.setActive(props.player1);
        props.setActivesymbol(props.first);

        return () => {
            props.setActive('');
            props.setActivesymbol('');
            props.setWin(false), 
            emptyBoard()
        }
    }, [])

    useEffect(() => {
        if (props.win === false) {
            togglePlayer();
            toggleSymbol();
        }
    }, [props.board])

    let togglePlayer = () => {
        props.active === props.player1 ? props.setActive(props.player2) : props.setActive(props.player1);
    }

    let toggleSymbol = () => {
        props.activesymbol === props.first ? props.setActivesymbol(props.second) : props.setActivesymbol(props.first);
    }

    let checkwinner = (i, board) => {
        if (i === 0) {
            if ((board[0] === board[1] && board[1] === board[2]) || (board[0] === board[3] && board[3] === board[6]) || (board[0] === board[4] && board[4] === board[8])) {
                props.setWin(true);
            }

        } else if (i === 1) {
            if ((board[1] === board[0] && board[1] === board[2]) || (board[1] === board[4] && board[4] === board[7])) {
                props.setWin(true);
            }
        } else if (i === 2) {
            if ((board[0] === board[1] && board[1] === board[2]) || (board[2] === board[5] && board[5] === board[8]) || (board[2] === board[4] && board[4] === board[6])) {
                props.setWin(true);
            }
        } else if (i === 3) {
            if ((board[0] === board[3] && board[3] === board[6]) || (board[3] === board[4] && board[4] === board[5])) {
                props.setWin(true);
            }
        } else if (i === 4) {
            if ((board[0] === board[4] && board[4] === board[8]) || (board[1] === board[4] && board[4] === board[7]) || (board[2] === board[4] && board[4] === board[6]) || (board[3] === board[4] && board[4] === board[5])) {
                props.setWin(true);
            }
        } else if (i === 5) {
            if ((board[2] === board[5] && board[5] === board[8]) || (board[3] === board[4] && board[4] === board[5])) {
                props.setWin(true);
            }
        } else if (i == 6) {
            if ((board[0] === board[3] && board[3] === board[6]) || (board[6] === board[7] && board[7] === board[8]) || (board[2] === board[4] && board[4] === board[6])) {
                props.setWin(true);
            }
        } else if (i == 7) {
            if ((board[6] === board[7] && board[7] === board[8]) || (board[1] === board[4] && board[4] === board[7])) {
                props.setWin(true);
            }
        } else {
            if ((board[6] === board[7] && board[7] === board[8]) || (board[0] === board[4] && board[4] === board[8]) || (board[2] === board[5] && board[5] === board[8])) {
                props.setWin(true);
            }
        }
        
        if(board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '' && props.win === false){
            window.alert("It's a tie...");
        }
    }

    let assign = (i) => {
        if (props.board[i] !== '') {
            window.alert('Tile already filled');
        } else {
            let niubord = [...props.board];
            niubord[i] = props.activesymbol;
            props.setBoard(niubord);
            checkwinner(i, niubord);
        }
    }

    let emptyBoard = () => {
        let emptyboard = ['','','','','','','','',''];
        props.setBoard(emptyboard);
    }

    return (
        <>
            <div className="row mb-3">
                {props.win === true ? <h1 className="text-success">{props.active} WINS!</h1> :
                    <h3>It is {props.active} turn with {props.activesymbol}!</h3>}
            </div>
            <button onClick={() => { props.setPlayer1(""), props.setPlayer2(""), props.setFirst("") }} className="btn btn-light my-2" id="restart">Restart</button>
            <div className="container bg-dark bg-opacity-25">
                <div className="row justify-content-center">
                    <div onClick={() => assign(0)} className="d-flex align-items-center justify-content-center col-2 border-bottom border-end tile display-2">
                        {props.board[0]}
                    </div>
                    <div onClick={() => assign(1)} className="d-flex align-items-center justify-content-center col-2 border-bottom tile display-2">
                        {props.board[1]}
                    </div>
                    <div onClick={() => assign(2)} className="d-flex align-items-center justify-content-center col-2 border-bottom border-start tile display-2">
                        {props.board[2]}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div onClick={() => assign(3)} className="d-flex align-items-center justify-content-center col-2 tile border-bottom border-end display-2">
                        {props.board[3]}
                    </div>
                    <div onClick={() => assign(4)} className="d-flex align-items-center justify-content-center col-2 border-bottom border-end tile display-2">
                        {props.board[4]}
                    </div>
                    <div onClick={() => assign(5)} className="d-flex align-items-center justify-content-center col-2 tile border-bottom display-2">
                        {props.board[5]}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div onClick={() => assign(6)} className="d-flex align-items-center justify-content-center col-2 border-end tile display-2">
                        {props.board[6]}
                    </div>
                    <div onClick={() => assign(7)} className="d-flex align-items-center justify-content-center col-2 border-end tile display-2">
                        {props.board[7]}
                    </div>
                    <div onClick={() => assign(8)} className="d-flex align-items-center justify-content-center col-2 tile display-2">
                        {props.board[8]}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Board;