import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CreateProduct from "./vendor/CreateProduct";
import PlaceOrder from "./customer/PlaceOrder";

class NewProduct extends Component {
  render() {
    return (
      <>{this.props.auth.user.isVendor ? <CreateProduct /> : <PlaceOrder />}</>
    );
  }
}

NewProduct.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(NewProduct);
