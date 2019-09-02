import React, { Component } from 'react'
import axios from 'axios'

export default class House extends Component {
    
    delete(id) {
        console.log('Delete house')
        console.log('')
        axios.delete(`/api/house/${id}`)
        console.log('Deleted House')
        console.log('')
    }

    render() {
        return (
            <div>
                <img src={this.props.house.image} alt='image of a home that a person inputed'/>
                <h4>Property Name: {this.props.house.property_name}</h4>
                <h4>Address: {this.props.house.the_address}</h4>
                <h4>City: {this.props.house.city}</h4>
                <h4>State: {this.props.house.the_state}</h4>
                <h4>Zipcode: {this.props.house.zip}</h4>
                <h4>Morgage: {this.props.house.morgage}</h4>
                <h4>Rent: {this.props.house.rent}</h4>
                <div className='delete'>
                    <button onClick={() => this.delete(this.props.house.id)}>Delete</button>
                </div>
            </div>
        )
    }
}
