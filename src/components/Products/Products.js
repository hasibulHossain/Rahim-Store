import React from "react";

import Product from "./Product/Product";
import { connect } from "react-redux";

// interface ProductsType {
//   productsArr: { userId: number; id: number; title: number }[];
// }

function Products(props) {
  let products;


  if (props.productsArr.length === 0) {
    products = <p style={ { textAlign: 'center', fontSize: '4rem' } }>Product list is empty</p>;
  }

  if (props.loading) {
    return <p style={ { textAlign: 'center', fontSize: '4rem' } }>loading...</p>
  }

  if (!props.productsArr) {
    products = <p style={ { textAlign: 'center', fontSize: '4rem' } }>Refresh browser &#9785; </p>;
  }

  if (props.productsArr.length > 0) {
    products = (
      <ul className="flex flex-col justify-center items-center p-4">
        {props.productsArr.map((product) => (
          <Product
            key={ product._id }
            name={ product.name }
            price={ product.price }
            imageUrl={ product.imageUrl }
            expiryDate={ product.expiryDate }
            id={ product._id }
          />
        )) }
      </ul>
    );
  }


  return products;
}

const mapStateToProps = (state) => {
  return {
    productsArr: state.productsRTR.products,
    loading: state.productsRTR.loading
  };
};

export default connect(mapStateToProps)(Products);
