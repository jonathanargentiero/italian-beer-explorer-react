import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Explorer from './components/explorer.jsx';

export default class App {
  constructor(options) {
	this._catalog = options.catalog;
	this._queryOptions = {
	  pageSize: 10
	};
	this._container = document.getElementById(options.containerId);
  }

  init() {
	let that = this;
	this._catalog.Beer.query(this._queryOptions).then(beers => {
	  ReactDOM.render(
	  <div className="container">
		<div className="header">
		  <h1 className="text-muted">Italian Beer Explorer</h1>
		</div>
		<Explorer data={beers} />
      </div>,
	  that._container
	  );
	});
	

  }
}