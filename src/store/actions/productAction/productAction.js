import * as actionTypes from "../actoinTypes";

// const domain = '//rahim-store-api.herokuapp.com';
const domain = '//localhost:8080';

export const deleteProduct = (id) => {
  return dispatch => {
    const res = fetch(`${domain}/shop/product/${id}`, {
      method: 'DELETE'
    })

    res.then(_ => {
      dispatch({ type: actionTypes.DELETE_PRODUCT, payload: id });
    })
  };
};

const fetchProductsComplete = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCT_COMPLETE,
    payload: data,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.INIT })
    const res = fetch(`${domain}/shop/products`);
    res
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        dispatch(fetchProductsComplete(data.products));
      })
      .catch(err => {
        fetchProducts()
      })
  };
};

export const fetchSortedProducts = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.INIT })
    const res = fetch(`${domain}/shop/sorted-products`);
    res
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        dispatch({ type: actionTypes.FETCH_SORTED_PRODUCT_COMPLETE, payload: data.products });
      });
  };
};

const addProduct = productData => {
  return {
    type: actionTypes.ADD_PRODUCT,
    payload: productData
  }
}

const addProductComplete = () => {
  return {
    type: actionTypes.ADD_PRODUCT_FINISH
  }
}

export const addProductInit = (productData) => {
  // how to submit form with file
  const formData = new FormData();
  formData.append('name', productData.name);
  formData.append('price', productData.price);
  formData.append('expiryDate', productData.expiryDate);
  formData.append('image', productData.image);

  return dispatch => {
    dispatch({ type: actionTypes.ADD_PRODUCT_INIT })
    const res = fetch(`${domain}/shop/product`, {
      method: "POST",
      body: formData
    });

    res.then(data => {
      dispatch(addProductComplete());
      return data.json();
    })
      .then(data => {
        dispatch(addProduct(data.product))
      })
  }

}

export const submitEditProduct = (productData, id) => {
  // how to submit form with file
  const formData = new FormData();
  formData.append('name', productData.name);
  formData.append('price', productData.price);
  formData.append('expiryDate', productData.expiryDate);
  formData.append('image', productData.image);
  return dispatch => {
    const res = fetch(`${domain}/shop/product/${id}`, {
      method: "PUT",
      body: formData
    });

    res.then(data => {
      return data.json();
    })
      .then(data => {
        dispatch({ type: actionTypes.SUBMIT_EDIT_PRODUCT, payload: data.product })
      })
  }

}

export const getEditProduct = (id) => {

  return dispatch => {
    dispatch({ type: actionTypes.EDIT_PRODUCT_INIT });
    const res = fetch(`${domain}/shop/product/${id}`);
    res.then(product => {
      return product.json();
    })
      .then(product => {
        dispatch({ type: actionTypes.EDIT_PRODUCT, payload: product.product })
      })
  }
}
