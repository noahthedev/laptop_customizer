import React from 'react';
import FeatureListItem from './FeatureListItem'
import FEATURES from './store.js'

export default class FeatureList extends React.Component {

  render() {
    const features = Object.keys(FEATURES).map((feature, idx) => {
      return (
        <FeatureListItem 
          feature={feature} 
          key={idx}
          idx={idx} 
          features={FEATURES}
          selected={this.props.selected}
          onSelectItem={this.props.onSelectItem}/>
      )
    }); 

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}