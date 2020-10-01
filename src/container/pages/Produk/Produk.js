import React, { Component, Fragment } from 'react';
import './Produk.css';
import iconTroli from '../../../shopping-cart.svg';
import CardProduk from './CardProduk/CardProduk.js';

class Produk extends Component {
    state = {
        orders: 0
    }

    handleCounterChange = (newValue) => {
        this.setState({
            orders: newValue
        })
    }

    render(){
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        SYR
                    </div>
                    <div className="troley">
                        <img src={iconTroli} alt=""></img>
                        <div className="count">{this.state.orders}</div>
                    </div>
                </div>
                <CardProduk onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}
export default Produk;
