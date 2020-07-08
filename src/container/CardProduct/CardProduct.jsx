import React, {Component} from 'react';

class CardProduct extends Component {
    state = {
        order: 0,
        name: 'Rinaldy',
    }

    // 2. menangkap nilai dari method handlePlus
    handleCounterChange = (newValue) => {
        // 3. Lalu mengirim ke props onCounterChange yang ada di Product
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1 
        }, () => {
            // 1. MENGIRIM NILAI STATE ORDER TERBARU LALU DI TANGKAP handleCounterChange
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }


    render() {
        return (
            
            <div className="card">
                <div className="img-thumb-product">
                    <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/Daging+Sapi+Satuan/Semur.jpg" alt=""/>
                    <p className="product-title">Daging Sapi Bali 5kg Pasar Baru</p>
                    <p className="product-price">Rp. 340.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" name="" className="inputCounter" value={this.state.order} id=""/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardProduct;