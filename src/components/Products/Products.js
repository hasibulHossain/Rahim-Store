import React, { useState } from "react";

import Product from "./Product/Product";
import { connect } from "react-redux";
import * as actions from '../../store/actions/index';

// interface ProductsType {
//   productsArr: { userId: number; id: number; title: number }[];
// }

function Products(props) {
  const [sortOptionValue, setSortOptionValue] = useState('');
  let products;

  const sortOptionHandler = e => {
    e.preventDefault();
    const value = e.target.value;
    if (value === 'byExpiryDate') {
      props.fetchSortedProducts()
    }

    setSortOptionValue(e.target.value);
    console.log(e.target.value)
  }


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
      <>
        <div className="flex justify-end items-center mr-16 text-lg select">
          <p className="font-medium">Filter Products</p>
          <select className="bg-gray-200 py-2 pl-4 pr-12 rounded ml-4" value={ sortOptionValue } onChange={ (e) => sortOptionHandler(e) }>
            <option value="byPrice" >byPrice</option>
            <option value="byExpiryDate">By expiry date</option>
          </select>
        </div>
        <ul className="flex flex-col justify-center items-center p-4">
          { props.productsArr.map((product) => (
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
      </>
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSortedProducts: () => dispatch(actions.fetchSortedProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
