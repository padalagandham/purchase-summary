import React, { Component } from 'react';
import { connect } from "react-redux";
import { applyPromoCode } from "./purchaseActions";
import './PromoCode.css';

class Promocode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails : true,
            promocode : '',
            success : false
        }
        this.toggle = this.toggle.bind(this);
        this.applyPromo = this.applyPromo.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
  toggle() {
        this.setState(state => ({ showDetails: !state.showDetails }));
  }
  applyPromo(e) {
    e.preventDefault();
      if(this.state.promocode.toUpperCase() !== "DISCOUNT"){
          this.setState({
              error : true
          })
      }else{
        this.props.dispatch(applyPromoCode());
        this.setState({success : true})
      }      
  }
  handleInputChange(event) {
    this.setState({promocode: event.target.value, error : false, success : false});
  }
  promoCodeForm () {
      return (
        <div className="promoFormContainer">
            <div className="promolabel">
                Promo code
            </div>
            <div className="promoform">
                <input aria-required="true" aria-label="Enter promo code" name="promocode" value={this.state.promocode} onChange={this.handleInputChange} />
                <button type="button" className="applyPromoButton" aria-label="Apply promo code" onClick={this.applyPromo}>Apply</button>
            </div>
            <div id="errorMessage" className={this.state.error ? "text-left red" : "hidden"}>Error!! Invalid promo code </div>
            <div id="successMessage" className={this.state.success ? "text-left green" : "hidden"}>Congratulations!! you have success applied promotion</div>
            
        </div>)
  }
  render() {
    return (
      <li>
          <div className="toggleContainer" onClick={this.toggle}>
              <div className="label">{ this.state.showDetails ? "Apply promo code" : "Hide promo code"}</div>
              <div className={ this.state.showDetails ? "plus icon" : "minus icon"} aria-hidden="true"></div>
          </div>
        
         {!this.state.showDetails ? this.promoCodeForm() : '' } 
      </li>
    );
  }
}

export default connect()(Promocode);



