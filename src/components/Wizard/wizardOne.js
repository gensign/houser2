import React, { Component } from 'react'
import store from '../redux/store'
import { STEP_ONE } from '../redux/reducer'
import { Link } from 'react-router-dom'

export default class wizardOne extends Component {
    constructor() {
        super()
        this.state = {
            reduxState: store.getState(),
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                property_name: reduxState.property_name,
                the_address: reduxState.the_address,
                city: reduxState.city,
                the_state: reduxState.the_state,
                zip: reduxState.zip
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
            type: STEP_ONE,
            payload: this.state
        })
        let reduxState = store.getState()
        console.log(reduxState)
    }

    render() {
        return (
            <div>
                <div>
                    <span>House Name:<input onChange={e => this.handleChange('property_name', e)} name="itemName" type="text" /></span>
                    <span>Address<input onChange={e => this.handleChange('the_address', e)} name="category" type="text" /></span>
                    <span>City<input onChange={e => this.handleChange('city', e)} name="category" type="text" /></span>
                    <span>State<input onChange={e => this.handleChange('the_state', e)} name="category" type="text" /></span>
                    <span>Zip<input onChange={e => this.handleChange('zip', e)} name="category" type="text" /></span>
                </div>
                <div>
                <Link to='/wizard/step2'>
                        <button onClick={this.nextStep}>Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }
}
