import React, { Component } from 'react';
import "./tile.css";

export default class Tile extends Component {
    
    tileClick(props) {
        props.updateBoard(props.loc, props.turn);
    }

    render() {
        return(
            <div id= "tile1" className={'tile' + this.props.loc} onClick={() => this.tileClick(this.props)}>
                <p>{this.props.value}</p>
            </div>
        )

    }
}