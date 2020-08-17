import React, { Component } from "react";

class CartItem extends Component {
  render() {
    return (
      <tr className="table_row">
        <td className="column-1">
          <div className="how-itemcart1">
            <img
              src={"images/products/" + this.props.value.imgpath}
              alt="IMG"
            />
          </div>
        </td>
        <td className="column-2">{this.props.value.name}</td>
        <td className="column-3">{this.props.value.price}VND</td>
        <td className="column-4">
          <div className="wrap-num-product flex-w m-l-auto m-r-0">
            <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
              <i className="fs-16 zmdi zmdi-minus"></i>
            </div>
            <input
              className="mtext-104 cl3 txt-center num-product"
              type="number"
              name="num-product1"
              defaultValue={this.props.value.quantity}
            />
            <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
              <i className="fs-16 zmdi zmdi-plus"></i>
            </div>
          </div>
        </td>
        <td className="column-5">
           {this.props.value.price * this.props.value.quantity} VND
        </td>
      </tr>
    );
  }
}

export default CartItem;
