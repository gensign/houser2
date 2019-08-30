import React, { Component } from 'react'
import House from '../House/House'
import axios from 'axios'

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

    deleteHouse() {
        axios.delete().then().catch()
    }

    render() {
        return (
            <div>
                {this.state.houses.map(house => {
                    return (
                        <div>
                            <House house={house} />
                        </div>
                    )
                })}
                <button>Add New Property</button>
            </div>
        )
    }
}
