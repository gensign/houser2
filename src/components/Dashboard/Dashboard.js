import React, { Component } from 'react'
import House from '../House/House'
import axios from 'axios'

export default class Dashboard extends Component {
    state = {
        houses: []
    }

    getAllHouses() {
        axios.get().then().catch()
    }

    deleteHouse() {
        axios.delete().then().catch()
    }

    render() {
        return (
            <div>
                <House />
                <button>Add New Property</button>
                <button>Cancel</button>
            </div>
        )
    }
}
