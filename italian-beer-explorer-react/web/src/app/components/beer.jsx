import * as React from 'react';
import Brewery from './brewery.jsx';

export default class Beer extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
		brewery: {}
	};
  }

  componentWillMount() {
	let beer = this.props.data;
	if (beer.brewery) {
	  beer.brewery.fetch().then(brewery => {
		this.setState({ brewery: brewery });
	  });
	}
  }
  
  render() {
	let beer = this.props.data;
	return (
	  <div className="beer">
		<div className="panel panel-primary">
		  <div className="beer-panel__heading panel-heading">
			<span className="beer-panel__icon"></span>
			<a className="beer-panel__title" target="_blank" href={'http://'+beer.url}>{beer.name}</a>
			<Brewery data={this.state.brewery} />
		  </div>
		  <div className="panel-body">
			<div className="beer-panel__property"><strong>Rank:</strong> {beer.position}</div>
			<div className="beer-panel__property"><strong>Rating:</strong> {beer.rating}</div>
			<div className="beer-panel__property"><strong>Score:</strong> {beer.score}</div>
			<div className="beer-panel__property"><strong>Alcohol:</strong> {beer.alcohol}°</div>
			<div className="beer-panel__property"><strong>Tags:</strong> <a target="_blank" href={'http://'+beer.tagsUrl}>{beer.tags}</a></div>
		  </div>
		</div>
	  </div>
	);
  }

}