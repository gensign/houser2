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

    handleInputChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    addHouse(){
        axios.post().then().catch()
    }

    render() {
        return (
            <div>
                Wizard
            </div>
        )
    }
}
