import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import './checkout.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.Id} cartItem={cartItem} />)
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
});

export default connect(mapStateToProps)(CheckoutPage);