import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPurchaseSummary } from "./purchaseActions";
import MiniBag from './MiniBag';
import PromoCode from './PromoCode';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPurchaseSummary());
  }

  render() {
    const { pricing } = this.props;

    if (!pricing.total) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App">
            <ul>
              <li><label>Subttoal</label><span>${pricing.subtotal}</span></li>
              <li><label className="tooltip">Pickup savings
                <div className="bottom">
                   Picking up your order in the store helps cut costs, and we pass the savings on to you.
                </div>
              </label><span className="red">-${pricing.savings}</span></li>
              <li><label>Est.taxes & fees<br/><span className="font05">(Based on {pricing.zip})</span></label><span>${pricing.tax}</span></li>
              <li><hr/></li>
              <li className="bold"><label>Est. total</label><span>${pricing.total}</span></li>
               <MiniBag/>
               <li><hr/></li>
              <PromoCode />
            </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pricing: state.purchaseSummary.pricing,  
});

export default connect(mapStateToProps)(App);


