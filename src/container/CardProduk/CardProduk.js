import React, { Component } from 'react';

class CardProduk extends Component {
    state = {
        orders: 0
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            orders: this.state.orders + 1
        }, () => {
            this.handleCounterChange(this.state.orders);
        })
    }

    handleMinus = () => {
        if(this.state.orders > 0){
            this.setState({
                orders: this.state.orders - 1
            }, () => {
                this.handleCounterChange(this.state.orders);
            })
        }
    }
    
    render(){
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/Daging+Sapi+Satuan/Paru+Sapi.jpg" alt="foto-Cardproduk"></img>
                </div>
                <p className="product-title">Daging</p>
                <p className="product-price">Rp 120,000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" readOnly value={this.state.orders}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}
export default CardProduk;
