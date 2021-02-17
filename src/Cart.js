import React from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

export default class Cart extends React.Component {

  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      return (
        <CartItem
          feature={feature}
          key={idx}
          idx={idx}
          selected={this.props.selected}/>
      )
    }); 
    
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <CartTotal selected={this.props.selected} />
      </section>
    )
  }

}