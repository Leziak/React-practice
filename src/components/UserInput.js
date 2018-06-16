import React, { Component } from 'react';
import '../public/css/UserInput.css';

export class UserInput extends React.Component {
    render() {
        return (
            <div className={'Center'}>
                <input className={'UserInput'} type="text" onChange={this.props.changed}/>
            </div>
        )
    }
}