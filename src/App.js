import React, { useEffect, useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// local imports
import Products from "./components/Products/Products";
import AddProduct from './components/AddProduct/AddProduct';
import EdditProduct from './components/EdditProduct/EdditProduct';
import * as actionTypes from './store/actions/actoinTypes';
import * as actions from "./store/actions/index";

import Modal from './components/Modal/Modal';
function App(props) {
  const [openModal, setOpenModal] = useState(false);

  const { initialLoadTimeExceed } = props;

  let route = (
    <Switch>
      <Route path="/" exact >
        <Products />
      </Route>
      <Route path="/add-product">
        <AddProduct />
      </Route>
      <Route path="/edit-product">
        <EdditProduct />
      </Route>
    </Switch>
  )

  const closeModal = () => {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    if (!props.callProductsForFetch) {
      props.fetchProducts();

      setTimeout(() => {
        props.initialLoadTimeExceedDispatch();
      }, 7000);
    }

    if (props.loading && initialLoadTimeExceed) {
      setOpenModal(true)
    }
  }, [initialLoadTimeExceed]);

  let content = <div></div>
  if (openModal) {
    content = (
      <Modal closeModal={ closeModal }>
        <h1 className="text-4xl mb-8">Slow?</h1>
        <p className="mb-6 text-lg">It may take a few sec to load for the first time. Cause I have used Heroku for API deployment. So that after 30 minutes of inactivity Heroku dynos goes to the idle state at the free tier.</p>
        <p className="mb-10 text-lg">Please refresh the page.</p>
      </Modal>
    )
  }
  return (
    <>
      {content }
      <Layout>
        { route }
      </Layout>
    </>
  );
}

const mapStateToProps = state => {
  return {
    initialLoadTimeExceed: state.productsRTR.initialLoadTimeExceed,
    loading: state.productsRTR.loading,
    callProductsForFetch: state.productsRTR.callProductsForFetch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(actions.fetchProducts()),
    initialLoadTimeExceedDispatch: () => dispatch({ type: actionTypes.INITIAL_LOAD_TIME_EXCEED })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
