import React, { Component } from "react";
import CartItem from "./CartItem";
import api from "../../Api";
import { Link } from "react-router-dom";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
    };
  }
  componentDidMount() {
    api
      .get("/carts")
      .then((res) => {
        const carts = res.data;
        if (carts != null) {
          this.setState({ carts: carts });
        }
      })
      .catch((err) => console.log(err));
  }
  render() {
    let totalprice = 0;
    this.state.carts.map((value) => {
      totalprice += parseInt(value.price) * parseInt(value.quantity);
    });
    let elementcarts = (
      <form className="bg0 p-t-75 p-b-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
              <div className="m-l-25 m-r--38 m-lr-0-xl">
                <div className="wrap-table-shopping-cart">
                  <table className="table-shopping-cart">
                    <thead className="table_head">
                      <tr>
                        <th className="column-1">Product</th>
                        <th className="column-2"></th>
                        <th className="column-3">Price</th>
                        <th className="column-4">Quantity</th>
                        <th className="column-5">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.carts.map((item) => {
                        return <CartItem key={item.id} value={item} />;
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                  <div className="flex-w flex-m m-r-20 m-tb-5">
                    <input
                      className="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5"
                      type="text"
                      name="coupon"
                      placeholder="Coupon Code"
                    />

                    <div className="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
                      Apply coupon
                    </div>
                  </div>

                  <div className="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
                    Update Cart
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
              <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>

                <div className="flex-w flex-t bor12 p-b-13">
                  <div className="size-208">
                    <span className="stext-110 cl2">Subtotal:</span>
                  </div>

                  <div className="size-209">
                    <span className="mtext-110 cl2">{totalprice}VND</span>
                  </div>
                </div>

                <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                  <div className="size-208 w-full-ssm">
                    <span className="stext-110 cl2">Shipping:</span>
                  </div>

                  <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
                    <p className="stext-111 cl6 p-t-2">
                      There are no shipping methods available. Please double
                      check your address, or contact us if you need any help.
                    </p>

                    <div className="p-t-15">
                      <span className="stext-112 cl8">Calculate Shipping</span>

                      <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                        <select className="js-select2" name="time">
                          <option>Select a country...</option>
                          <option>USA</option>
                          <option>UK</option>
                        </select>
                        <div className="dropDownSelect2"></div>
                      </div>

                      <div className="bor8 bg0 m-b-12">
                        <input
                          className="stext-111 cl8 plh3 size-111 p-lr-15"
                          type="text"
                          name="state"
                          placeholder="State /  country"
                        />
                      </div>

                      <div className="bor8 bg0 m-b-22">
                        <input
                          className="stext-111 cl8 plh3 size-111 p-lr-15"
                          type="text"
                          name="postcode"
                          placeholder="Postcode / Zip"
                        />
                      </div>

                      <div className="flex-w">
                        <div className="flex-c-m stext-101 cl2 size-115 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer">
                          Update Totals
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-w flex-t p-t-27 p-b-33">
                  <div className="size-208">
                    <span className="mtext-101 cl2">Total:</span>
                  </div>

                  <div className="size-209 p-t-1">
                    <span className="mtext-110 cl2">{totalprice}VND</span>
                  </div>
                </div>

                <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
    let elementcartempty = (
      <div className="row">
        <h2 className="text-center col-12 mb-5">Cart is Empty!</h2>
      </div>
    );
    return (
      <div>
        <div className="container">
          <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <Link to="/" className="stext-109 cl8 hov-cl1 trans-04">
              Home
              <i
                className="fa fa-angle-right m-l-9 m-r-10"
                aria-hidden="true"
              ></i>
            </Link>
            <span className="stext-109 cl4">Shoping Cart</span>
          </div>
          {this.state.carts.length > 0 ? elementcarts : elementcartempty}
        </div>
      </div>
    );
  }
}

export default Cart;
