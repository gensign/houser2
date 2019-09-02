import React, { Component } from 'react'
import store from '../redux/store'
import { STEP_TWO } from '../redux/reducer'
import { Link } from 'react-router-dom'

export default class wizardTwo extends Component {
    constructor() {
        super()
        this.state = {
            reduxState: store.getState(),
            imageUrl: ''
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                image: reduxState.image
            })
        })
    }

    handleChange(prop, e) {
        this.setState({
            [prop]: e.target.value
        })
    }

    nextStep = () => {
        store.dispatch({
            type: STEP_TWO,
            payload: this.state
        })
        let reduxState = store.getState()
        console.log(reduxState)
    }

    render() {
        return (
            <div>
                <div>
                    <span>Image URL</span>
                    <input onChange={(e) => this.handleChange('imageUrl', e)} />
                </div>
                <div>
                    <Link to='/wizard/step1'>
                        <button>Previous Step</button>
                    </Link>
                    <Link to='/wizard/step3'>
                        <button onClick={this.nextStep}>Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }
}
