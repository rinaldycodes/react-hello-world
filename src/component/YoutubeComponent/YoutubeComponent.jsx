import React from 'react';
import './YoutubeComponent.css';

const YoutubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="" alt=""/>
             <p className="time">{props.time}</p>
            </div>
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
        </div>
    )
} 

YoutubeComponent.defaultProps = {
    time: '00.00',
    title: 'Lily Production',
    desc: 'xx xxx xxxx'
}

export default YoutubeComponent;