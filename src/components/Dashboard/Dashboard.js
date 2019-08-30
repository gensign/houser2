import React, { Component } from 'react'
import House from '../House/House'

export default class Dashboard extends Component {
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
