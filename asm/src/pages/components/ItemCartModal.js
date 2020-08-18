import React, { Component } from "react";
import { Link } from "react-router-dom";

class ItemCartModal extends Component {
  render() {
    return (
      <li className="header-cart-item flex-w flex-t m-b-12">
        <div className="header-cart-item-img">
          <img src={"images/products/" + this.props.item.imgpath} alt="IMG" />
        </div>
        <div className="header-cart-item-txt p-t-8">
          <Link
            to="/product/productdetail"
            className="header-cart-item-name m-b-18 hov-cl1 trans-04"
          >
            {this.props.item.name}
          </Link>
          <span className="header-cart-item-info">
            {this.props.item.quantity} x ${this.props.item.price}
          </span>
        </div>
      </li>
    );
  }
}

export default ItemCartModal;
