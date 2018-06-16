import React, { Component } from 'react';
import '../public/css/UserOutput.css';


export class UserOutput extends React.Component {
    render() {
        return (
            <div>
                <p className={'UserOutput'}>{this.props.username}</p>
                <p>{this.props.email}</p>
            </div>
        )
    }
}