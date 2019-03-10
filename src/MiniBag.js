import React, { Component } from 'react';
import { connect } from "react-redux";
import './MiniBag.css';


function ItemList(list) {
    return (list.items.map((item, index) => (
        <div class="mibibag-container" key={index}>
        <div className="margin-right-1">
            <img src={item.item_image} aria-hidden="true"/>
        </div>
        <div className="productDetails">
            <div className="text-left margin-bottom-10">{item.item_name} </div>
            <div className="productDetilsWrapper margin-bottom-10">
                <div className="bold text-left">${item.regprice}</div>
                <div>Qty : {item.quantity}</div>
            </div>
            <div className="text-left line-through">${item.actprice}</div>
        </div>
        </div>
    )))
    
}

class MiniBag extends Component {
    constructor(props) {
        super(props);
        this.state = {showDetails : true}
        this.toggle = this.toggle.bind(this);
    }
  toggle() {
        this.setState(state => ({ showDetails: !state.showDetails }));
  }
  render() {
    const { itemDetails } = this.props;
    return (
      <li>
           <div className="toggleContainer" onClick={this.toggle}>
              <div className="label">{ this.state.showDetails ? "See item details" : "Hide item details"}</div>
              <div className={ this.state.showDetails ? "plus icon" : "minus icon"} aria-hidden="true"></div>
          </div>

          {!this.state.showDetails ? <ItemList items={itemDetails}/> : '' } 
      </li>
    );
  }
}

const mapStateToProps = state => ({
    itemDetails: state.purchaseSummary.itemDetails,  
}); 

export default connect(mapStateToProps)(MiniBag);


