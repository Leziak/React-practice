import React, {Component} from 'react';
import './App.css';
import './components/UserInput'
import {UserInput} from "./components/UserInput";
import {UserOutput} from "./components/UserOutput";


class App extends Component {

    constructor() {
        super();
        this.state = {
            username: 'Samuello'
        }
    }

    nameChangedHandler(event) {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (

            <div>
                <h1>Test</h1>
                <UserInput
                    changed={this.nameChangedHandler.bind(this)}
                />
                <UserOutput
                    username={this.state.username}
                    email={'samo.majoros@gmail.com'}
                />
            </div>
        )

    }
}

export default App;
