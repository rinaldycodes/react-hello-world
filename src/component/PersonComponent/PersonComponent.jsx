import React from 'react';
import './PersonComponent.css';

const PersonComponent = (props) => {
    return (
        <div className="person-wrapper">
            <div className="img-profile">
                <img src="" alt="img profil"/>
    <p id="name">{props.name}</p>
    <p id="phone">{props.phone}</p>
            </div>
        </div>
    )
}

PersonComponent.defaultProps = {
    name: 'Undefined',
    phone: 'Undefined'
}

export default PersonComponent;