import React, { Component } from "react";
import Product from "./Product";
import Filter from "./Filter";
import api from "../../Api";
const titleIndexpage = (
  <div className="p-b-10">
    <h3 className="ltext-103 cl5">Product Overview</h3>
  </div>
);

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listproducts: [],
    };
  }

  componentDidMount() {
    api
      .get("/product")
      .then((res) => {
        const result = res.data;
        if (result != null) {
          this.setState({ listproducts: result });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    let elements = this.state.listproducts.map((value) => {
      return <Product key={value.id} item={value} />;
    });
    return (
      <section className="bg0 p-t-23 p-b-140">
        <div className="container">
          {this.props.match.match.path == "/" ? titleIndexpage : undefined}
          <Filter />
          <div className="row isotope-grid">{elements}</div>
        </div>
      </section>
    );
  }
}

export default ListProduct;
