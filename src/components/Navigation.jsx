import React from "react";
import './Navigation.scss';
import {NavLink} from "react-router-dom";

export default class Navigation extends React.Component {
    render() {
        return (
            <div className='Navigation'>
                {this.props.dogs.map(dog =>
                        <NavLink key={dog.name} className='dog' to={'/dogs/' + dog.name.toLowerCase()}>
                            <div>{dog.name}</div>
                            <img src={dog.image} alt='not found'/>
                        </NavLink>
                )}
            </div>
        )
    }
}