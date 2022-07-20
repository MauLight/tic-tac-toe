import React from "react";

const Playerselect = (props) => {

    return (
        <>
            <div className="row mb-5">
                <h3>Game Setup</h3>
            </div>
            <div className="mt-5 row justify-content-center align-items-center">
                <div className="p-5 col-md-6 bg-dark bg-opacity-75">
                    <h3>SET PLAYERS</h3>
                    <input type="text" id="player1" onChange={(e) => props.setPlayer1(e.target.value)} placeholder="Player 1" />
                    <input type="text" id="player2" onChange={(e) => props.setPlayer2(e.target.value)} placeholder="Player 2" /><br />
                    <h4 className="mt-2">Choose {props.player1}'s symbol</h4>
                    <button onClick={(e) => {props.setFirst(e.target.value), props.setSecond('O')}} className="weapon mt-2 me-4 display-4 py-2 px-4 bg-dark bg-opacity-75" id="x" value="X">X</button>
                    <button onClick={(e) => {props.setFirst(e.target.value), props.setSecond('X')}} className="weapon mt-2 ms-4 display-4 py-2 px-4 bg-dark bg-opacity-75" id="o" value="O">O</button>

                </div>
            </div>
        </>
    )
};

export default Playerselect;