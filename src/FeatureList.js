import React from 'react';
import FeatureListItem from './FeatureListItem'


export default class FeatureList extends React.Component {

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      return (
        <FeatureListItem 
          feature={feature} 
          idx={idx} 
          features={this.props.features}
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