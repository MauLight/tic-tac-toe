import React, {Component} from 'react';


import Announcement from './announcement';
import Reset from './reset';
import Tile from './tile';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            gameBoard: [
                'x','o','',
                '','','',
                '','',''
            ],
            turn:'x',
            winner: null,

        }
    }

    updateBoard(loc, player) {

    };

    resetBoard() {
        this.setState({
            gameBoard: [
                '','','',
                '','','',
                '','',''
            ],
            turn:'x',
            winner: null,
        })
    }

    render() {
        return (
            <div className="container">
                <div className="menu">
                    <h1 className='title'>Tic Tac toe</h1>
                    <Announcement  winner= {this.state.winner} />
                    <Reset reset={this.resetBoard.bind(this)} />
                </div>
                {this.state.gameBoard.map(function(value, i){
                    return (
                        <Tile 
                        key={i}
                        loc={i}
                        value={value}
                        updateBoard={this.updateBoard.bind(this)}
                        turn={this.state.turn}
                        /> 
                    )

                }.bind(this))}
            </div>
        )
    }
}

export default Home