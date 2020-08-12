import React, { Component } from "react";
import Product from "./Product";
import Filter from "./Filter";
const titleIndexpage = (
  <div className="p-b-10">
    <h3 className="ltext-103 cl5">Product Overview</h3>
  </div>
);

class ListProduct extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <section className="bg0 p-t-23 p-b-140">
        <div className="container">
          {this.props.match.match.path == "/" ? titleIndexpage : undefined}
          <Filter />
          <div className="row isotope-grid">
            <Product />
          </div>
        </div>
      </section>
    );
  }
}

export default ListProduct;
