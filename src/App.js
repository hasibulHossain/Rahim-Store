import React, { useEffect, useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// local imports
import Products from "./components/Products/Products";
import AddProduct from './components/AddProduct/AddProduct';
import EdditProduct from './components/EdditProduct/EdditProduct';
import * as actions from "./store/actions/index";

import Modal from './components/Modal/Modal';
function App(props) {
  const [openModal, setOpenModal] = useState(false);
  const [sortOptionValue, setSortOptionValue] = useState('')

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
  const sortOptionHandler = e => {
    e.preventDefault();
    const value = e.target.value;
    if (value === 'byExpiryDate') {
      props.fetchSortedProducts()
    }

    setSortOptionValue(e.target.value);
    console.log(e.target.value)
  }

  const closeModal = () => {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    // setTimeout(() => {
    //   if (props.initialLoadTimeExceed) {
    //     console.log('I am from timeout ', props.initialLoadTimeExceed)
    //     setOpenModal(true)
    //   }
    // }, 7000);

    props.fetchProducts();
  }, []);

  let content = <div></div>
  if (openModal) {
    content = (
      <Modal closeModal={ closeModal }>
        <h1 className="text-4xl mb-8">Slow?</h1>
        <p className="mb-16 text-lg">It may takes few sec to load for first time. Cause after 30 minutes of inactivity heroku dynos goes to idle state.(free tier)</p>
      </Modal>
    )
  }
  return (
    <>
      {content }
      <Layout>
        <div className="flex flex-col items-end mr-16">
          <p>Filter Products</p>
          <select value={ sortOptionValue } onChange={ (e) => sortOptionHandler(e) }>
            <option value="byPrice" >byPrice</option>
            <option value="byExpiryDate">By expiry date</option>
          </select>
        </div>
        { route }
      </Layout>
    </>
  );
}

const mapStateToProps = state => {
  return {
    initialLoadTimeExceed: state.productsRTR.initialLoadTimeExceed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(actions.fetchProducts()),
    fetchSortedProducts: () => dispatch(actions.fetchSortedProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
