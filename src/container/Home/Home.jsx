import React, {Component} from 'react';
// import YoutubeComponent from '../../component/YoutubeComponent/YoutubeComponent';
// import PersonComponent from '../../component/PersonComponent/PersonComponent';
// import Product from '../Product/Product';
// import LifeCycleComponent from '../LifeCycleComponent/LifeCycleComponent';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {
    render() {
        return (
            <div>
                {/* <h5>YoutubeComponent</h5>
                <hr/>
                <YoutubeComponent 
                    title="kamen rider" 
                    time="8.20"
                    desc="belajar kamu"/>
                <YoutubeComponent 
                    title="X rider" 
                    time="9.20"
                    desc="belajar dia"/>
                <YoutubeComponent 
                    title="Z rider" 
                    time="10.20"
                    desc="belajar rayu"/>
                <YoutubeComponent/>

                <h5>PersonComponent</h5>
                <hr/>
                <PersonComponent 
                    name="Rayu"
                    phone="0882-1397-9180"
                />
                <PersonComponent 
                    name="Niesta"
                    phone="0882-1397-9180"
                />
                <PersonComponent 
                    name="Elomie"
                    phone="0882-1397-9180"
                /> */}

                {/* <h5>Product</h5>
                <hr/>
                <Product/> */}

                {/* <h5>LifeCycleComponent</h5>
                <hr/>
                <LifeCycleComponent/> */}

                <h5>Blog Post</h5>
                <BlogPost/>
            </div>

            
            
        )
    }
}

export default Home;