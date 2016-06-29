import * as React from 'react';

export default class Brewery extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }
  
  render() {
	let brewery = this.props.data;
	if (!brewery) {
	  return false;
	}
	return (
  	  <div className="beer-panel__brewery">
		<a target="_blank" href={'http'+brewery.url}>{brewery.name}</a>
	  </div>
	);
  }

}