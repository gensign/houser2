import React, { Component } from 'react'
// import axios from 'axios';
import wizardOne from './wizardOne'
import wizardTwo from './wizardTwo'
import wizardThree from './wizardThree'
import { Route } from 'react-router-dom'

export default class Wizard extends Component {
    cancel() {
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        })
    }
    

    render() {
        return (
            <div>
                <Route path='/wizard/step1' component={wizardOne} />
                <Route path='/wizard/step2' component={wizardTwo} />
                <Route path='/wizard/step3' component={wizardThree} />
                <div>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )
    }
}
