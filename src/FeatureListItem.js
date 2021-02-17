import React from 'react';
import ItemOption from './ItemOption.js'

export default class FeatureListItem extends React.Component {
  
  render() {
    const featureHash = this.props.feature + '-' + this.props.idx;
    const options = this.props.features[this.props.feature].map((item, idx) => {
      return (
        <ItemOption
          item={item}
          key={idx}
          feature={this.props.feature}
          selected={this.props.selected}
          onSelectItem={this.props.onSelectItem}/>
      )
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }  
}