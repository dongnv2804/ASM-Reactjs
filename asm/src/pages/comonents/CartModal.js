import React, { Component } from "react";
import ItemCartModal from "./ItemCartModal";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Cart from "./Cart";
class CartModal extends Component {
  componentDidMount() {}

  shouldComponentUpdate = (nextProps, nextState) => {
    if (JSON.stringify(this.props.carts) == JSON.stringify(nextProps.carts)) {
      return false;
    }
    return true;
  };

  render() {
    let elements = this.props.carts.map((value) => {
      return <ItemCartModal key={value.id} item={value}></ItemCartModal>;
    });
    return (
      <div className="wrap-header-cart js-panel-cart">
        <div className="s-full js-hide-cart"></div>
        <div className="header-cart flex-col-l p-l-65 p-r-25">
          <div className="header-cart-title flex-w flex-sb-m p-b-8">
            <span className="mtext-103 cl2">Your Cart</span>
            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
              <i className="zmdi zmdi-close"></i>
            </div>
          </div>
          <div className="header-cart-content flex-w js-pscroll">
            <ul className="header-cart-wrapitem w-full">{elements}</ul>
            <div className="w-full">
              <div className="header-cart-total w-full p-tb-40">
                Total: $75.00
              </div>
              <div className="header-cart-buttons flex-w w-full">
                <Link
                  to="/cart"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
                >
                  View Cart
                </Link>
                <Link
                  to="/cart"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
                >
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartModal;
