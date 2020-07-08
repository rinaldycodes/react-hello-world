import React, {Component, Fragment} from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    state = {
        order: 0,
        name: 'Rinaldy',
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="" alt="logo"/>
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/static/media/Basket.3f7ab1d9.svg" alt="keranjang belanja"/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        );
    }
}

export default Product;