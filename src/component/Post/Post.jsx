import React from 'react';

const Post = (props) => {
    return (
            <div className="post">
                <div className="img-thumb">
                    <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/sayur/Lodeh.jpg" alt=""/>
                </div>
                <div className="content">
                    <p className="title">{props.title}</p>
                    <p className="desc">{props.desc}</p>
                </div>
            </div>
    )
}

export default Post;