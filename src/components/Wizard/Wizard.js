import React, { Component } from 'react'
import axios from 'axios';

export default class Wizard extends Component {
    state = {
        name: '',
        address: '',
        city: '',
        state: '',
        zip: 0
    }

    handleChange(prop, e) {
        this.setState({
            [prop]: e.target.value
        })
    }

    addHouse() {
        axios.post().then().catch()
    }

    render() {
        return (
            <div>
                <span>House Name:<input onChange={e => this.handleChange('property_name', e)} name="itemName" type="text" /></span>
                <span>Address<input onChange={e => this.handleChange('the_address', e)} name="category" type="text" /></span>
                <span>City<input onChange={e => this.handleChange('city',e)} name="category" type="text" /></span>
                <span>State<input onChange={e => this.handleChange('the_state',e)} name="category" type="text" /></span>
                <span>Zip<input onChange={e => this.handleChange('zip',e)} name="category" type="text" /></span>
                <button>Cancel</button>
            </div>
        )
    }
}
