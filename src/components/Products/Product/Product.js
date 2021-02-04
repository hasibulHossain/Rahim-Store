import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import * as actions from "../../../store/actions/index";
import './Product.css';

function Product(props) {
  const date = moment(props.expiryDate).format("DD, MMM, YYYY");
  return (
    <li className="flex mb-12 bg-white shadow-lg rounded-t-lg rounded-l-lg product-width">
      <div className="relative flex-shrink-0 w-64 h-full bg-gray-200 ">
        <svg
          // className="w-6 h-6"
          className="text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        {
          props.imageUrl.split('/')[1] === 'images' && <img
            src={ `//rahim-store-api.herokuapp.com${props.imageUrl}` }
            alt={ props.name }
            className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
          />
        }

      </div>
      <div className="p-8 flex-auto flex-shrink bg-gray-50 rounded-r-lg">
        <div className="product-info">
          <div className="flex justify-between mb-4">
            <div className="w-10/12">
              <h1 className="capitalize text-2xl font-semibold mb-3">
                { props.name }
              </h1>
            </div>
            <div className="flex item-center font-semibold text-gray-500 mr-2 text-3xl">
              <strong className="text-lg">&#2547;</strong>
              <p>
                { props.price }
              </p>
            </div>
          </div>
          <div className="font-medium mb-4">
            Expiry Date:
            <span className="pl-2">{ date }</span>
          </div>
        </div>
        <div className="flex mt-8 xl:w-full">
          <button
            className="btn-edit w-20 p-2 mr-4 border rounded-lg bg-blue-600 ring ring-transparent focus:ring-blue-300 text-white"
            type="button" onClick={ () => {
              props.history.push({ pathname: '/edit-product' });
              return props.getEditProduct(props.id)
            } }
          >
            Edit
          </button>
          <button
            className="btn-dlt w-20 p-2 border rounded-md text-white ring ring-transparent bg-red-600 focus:ring-red-300"
            type="button"
            onClick={ () => props.deleteProduct(props.id) }
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(actions.deleteProduct(id)),
    getEditProduct: (id) => dispatch(actions.getEditProduct(id))
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Product));
