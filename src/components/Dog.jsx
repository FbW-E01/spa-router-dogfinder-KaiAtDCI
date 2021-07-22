import React from "react";
import './Dog.scss'

export default class Dog extends React.Component {

    render() {
        return (
            <div className='Dog'>
                <h1>{this.props.dog.name}</h1>
                <img src={this.props.dog.image} alt='not found'/>
                <p>{this.props.dog.description}</p>
            </div>
        )
    }
}