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
    axios
      .get("http://localhost:8000/cart")
      .then((res) => {
        const carts = res.data;
        this.setState({ carts: carts });
        console.log(this.state.carts);
      })
      .catch((err) => console.log(err));
  }
  updatecarts() {
    console.log('click');
    axios
      .get("http://localhost:8000/cart")
      .then((res) => {
        const carts = res.data;
        this.setState({ carts: carts });
        console.log(this.state.carts);
      })
      .catch((err) => console.log(err));
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    if (JSON.stringify(this.state.carts) == JSON.stringify(nextState.carts)) {
      console.log("no changes");
      return false;
    }
    return true;
  };

  render() {
    let totalcount = 0;
    this.state.carts.map((value) => {
      totalcount += value.quantity;
    });
    return (
      <div className="App">
        <Header totalcart={totalcount} />
        <div className="container">
          <button onClick={() => this.updatecarts()}>Click</button>
        </div>
        <CartModal />
        <Footer />
      </div>
    );
  }
}

export default App;
