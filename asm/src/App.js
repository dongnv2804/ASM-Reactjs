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
import api from "./Api";
import Cart from "./pages/comonents/Cart";
import ProductDetail from "./pages/comonents/ProductDetail";
import SweetAlert from "react-bootstrap-sweetalert";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      addcartok: false,
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

// updateCart = (e) =>
// {
//   e.preventDefault();
//   const formData
// }

  AddToCart = (e) => {
    console.log("click");
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = {};
    formData.forEach((value, property) => (body[property] = value));
    api
      .post("/carts/addtocart", body)
      .then((response) => {
        this.setState({ addcartok: true });
        api
          .get("/carts")
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
    if (this.state.addcartok != nextState.addcartok) {
       return true;
    }
    if (JSON.stringify(this.state.carts) == JSON.stringify(nextState.carts)) {
      return false;
    }
    return true;
  };

  onConfirm = () => {
    this.setState({ addcartok: false });
  };
  onCancel = () => {
    this.setState({ addcartok: false });
  };

  render() {
    let totalcount = 0;
    if (this.state.carts.length > 0) {
      this.state.carts.map((value) => {
        totalcount += parseInt(value.quantity);
      });
    }
    let showmessage = (
      <SweetAlert
        success
        show={this.state.addcartok}
        onConfirm={this.onConfirm}
        onCancel={this.onCancel}
        title="OK"
      >
        Add to cart successfully !
      </SweetAlert>
    );
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
            exact
            component={(match) => <ListProduct match={match} />}
          ></Route>
          <Route path="/cart" component={() => <Cart />}></Route>
          <Route
            path="/product/:id"
            exact
            component={(match) => (
              <ProductDetail addtocart={this.AddToCart} match={match} />
            )}
          ></Route>
          {showmessage}
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
