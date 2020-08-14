import React, { Component } from "react";
import Banner from "./pages/header/Banner";
import ListProduct from "./pages/comonents/ListProduct";
import CartModal from "./pages/comonents/CartModal";
import Header from "./pages/header/Header";
import Slider from "./pages/header/Slider";
import Footer from "./pages/footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import axios from "axios";
import api from "./Api";
import Cart from "./pages/comonents/Cart";
import ProductDetail from "./pages/comonents/ProductDetail";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
    };
  }
  componentDidMount() {
    api
      .get("/cart")
      .then((res) => {
        const carts = res.data;
        if (carts != null) {
          this.setState({ carts: carts });
        }
      })
      .catch((err) => console.log(err));
  }
  AddToCart = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = {};
    formData.forEach((value, property) => (body[property] = value));
    api
      .post("/cart/addtocart", body)
      .then((response) => {
        api
          .get("/cart")
          .then((res) => {
            const carts = res.data;
            if (carts != null) {
              this.setState({ carts: carts });
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  shouldComponentUpdate = (nextProps, nextState) => {
    if (JSON.stringify(this.state.carts) == JSON.stringify(nextState.carts)) {
      return false;
    }
    return true;
  };

  render() {
    let totalcount = 0;
    if (this.state.carts.length > 0) {
      this.state.carts.map((value) => {
        totalcount += parseInt(value.quantity);
      });
    }

    return (
      <Router>
        <Header totalcart={totalcount} />
        <CartModal carts={this.state.carts} />
        <div className="App">
          <Route path="/" exact component={() => <Slider />}></Route>
          <Route path="/" exact component={() => <Banner />}></Route>
          <Route
            path="/"
            exact
            component={(match) => <ListProduct match={match} />}
          ></Route>
          <Route
            path="/product"
            component={(match) => <ListProduct match={match} />}
          ></Route>
          <Route path="/cart" component={() => <Cart />}></Route>
          <Route
            path="/product/:id"
            component={(match) => (
              <ProductDetail addtocart={this.AddToCart} match={match} />
            )}
          ></Route>
          {/* <div className="container">
            <form onSubmit={(e) => this.AddToCart(e)}>
              ID <input className="form-control" name="id" />
              Size <input className="form-control" name="size" />
              Color <input className="form-control" name="color" />
              Price <input className="form-control" name="price" />
              Quantity <input className="form-control" name="quantity" />
              <button className="btn btn-primary" type="submit">
                Click
              </button>
            </form>
          </div> */}
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
