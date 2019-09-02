import React, { Component } from 'react'
import axios from 'axios'
import store from '../redux/store'
import { STEP_THREE } from '../redux/reducer'
import { Link } from 'react-router-dom'


export default class wizardThree extends Component {
    constructor() {
        super()
        this.state = {
            reduxState: store.getState(),
            mortgage: 0,
            rent: 0
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                mortgage: reduxState.morgage,
                rent: reduxState.morgage
            })
        })
    }


    handleChange(prop, e) {
        this.setState({
            [prop]: e.target.value
        })
    }

    addHouse() {
        console.log(store)
        console.log('')
        store.dispatch({
            type: STEP_THREE,
            payload: this.state
        })
        let reduxState = store.getState()
        console.log('hit: ', reduxState)
        axios.post('/api/house', reduxState).catch(err => alert(err))
    }

    complete = () => {
        store.dispatch({
            type: STEP_THREE,
            payload: this.state
        })
        let reduxState = store.getState()
        console.log('hit: ', reduxState)
        axios.post('/api/house', reduxState).catch(err => alert(err))
    }

    render() {
        return (
            <div>
                <div>
                    <span>Monthly Mortgage</span>
                <input onChange={(e) => this.handleChange('mortgage', e)} type='number' />
                <span>Rent</span>
                <input onChange={(e) => this.handleChange('rent', e)} type='number' />
                </div>
                <div>
                <Link to='/wizard/step2'>
                        <button>Previous Step</button>
                    </Link>
                    <Link to='/'>
                        <button onClick={this.complete}>Submit</button>
                    </Link>
                </div>
            </div>
        )
    }
}
