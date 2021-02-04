import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// local imports
import Products from "./components/Products/Products";
import AddProduct from './components/AddProduct/AddProduct';
import EdditProduct from './components/EdditProduct/EdditProduct';
import * as actions from "./store/actions/index";

function App(props) {
  useEffect(() => {
    props.fetchProducts();
  }, []);

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
  return (
    <Layout>
      { route }
    </Layout>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(actions.fetchProducts())
  };
};

export default connect(null, mapDispatchToProps)(App);
