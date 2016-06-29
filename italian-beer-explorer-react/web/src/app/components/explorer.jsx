import * as React from 'react';
import Beer from './beer.jsx';

export default class Explorer extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
	  collection: this.props.data
	};
  }
  
  _moreBeers() {
	let collection = this.state.collection;
	collection.more().then(moreBeers => {
	  this.setState({
		collection: moreBeers
	  });
	});
  }

  render() {
	let beers = this.state.collection.entities;
	return (
	  <div className="row">
		{beers.map(beer => {
		  return <Beer key={beer._key} data={beer} />
		})}
		<button class="btn btn-primary" onClick={this._moreBeers.bind(this)}>see more</button>
	  </div>
	);
  }

}