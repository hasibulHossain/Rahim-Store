import * as actionTypes from "../actions/actoinTypes";

const initialState = {
  products: [],
  editProduct: [],
  isProductAdded: false,
  inEditPage: false,
  loading: false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT:
      return {
        ...state,
        loading: true
      }

    case actionTypes.FETCH_PRODUCT_COMPLETE:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload)
      };

    case actionTypes.ADD_PRODUCT_INIT:
      return {
        ...state,
        loading: true
      }

    case actionTypes.ADD_PRODUCT_FINISH:
      return {
        ...state,
        loading: false,
        isProductAdded: true,
        inEditPage: false,
        editProduct: []
      }

    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        isProductAdded: false,
        products: state.products.concat(action.payload)
      }

    case actionTypes.EDIT_PRODUCT_INIT:
      return {
        ...state,
        loading: true,
      }

    case actionTypes.EDIT_PRODUCT:
      return {
        ...state,
        loading: false,
        editProduct: [action.payload]
      }

    case actionTypes.SUBMIT_EDIT_PRODUCT:
      const removeOldProduct = state.products.filter(product => product._id !== action.payload._id);
      const updatedProduct = removeOldProduct.concat(action.payload)
      return {
        ...state,
        loading: false,
        products: updatedProduct
      }

    default:
      return state;
  }
};

export default productReducer;
