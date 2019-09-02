import React, { Component } from 'react'
import House from '../House/House'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios.get('/api/houses').then(res => {
            // console.log("res: ", res.data)
            // console.log('')
            // console.log(this.state)
            // console.log('')
            this.setState({
                houses: res.data
            })
            // console.log(this.state)
            // console.log('')
        }).catch('Unable to connect to Database')
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Dashboard</h1>
                    <Link to='/wizard/step1'>
                        <button>Add New Property</button>
                    </Link>
                </div>
                {this.state.houses.map(house => {
                    return (
                        <div>
                            <House house={house} />
                        </div>
                    )
                })}
            </div>
        )
    }
}
