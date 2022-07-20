import React from 'react';
import "./tile.css";

export default class resetBoard extends React.Component {

    render() {
        return(
            <button className='resetBoard' onClick={this.props.reset}>Reset</button>
        )
    }
}