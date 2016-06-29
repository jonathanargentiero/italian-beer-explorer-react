jest.unmock('../app/components/beer.jsx');
jest.unmock('../__mocks__/beer.js');
jest.unmock('../__mocks__/brewery.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Beer from '../app/components/beer.jsx';
import mockBeer from '../__mocks__/beer.js';
import mockBrewery from '../__mocks__/brewery.js';
    
describe('App', () => {
  let beer = TestUtils.renderIntoDocument(
    <Beer key={mockBeer._KEY} data={mockBeer} />
  );
  
  it('should be instantied correctly.', () => {
    expect(beer).toBeDefined();
    expect(beer instanceof Beer).toBeTruthy();
  });
  
  const beerNode = ReactDOM.findDOMNode(beer);
  
  it('should be rendered.', () => {
    expect(beerNode).toBeDefined();
  }); 
  
  it('should have a data property.', () => {
    expect(beer.props.data).toBeDefined();
    expect(typeof beer.props.data.ID).toBe('number');
    expect(beer.props.data.ID).toEqual(mockBeer.ID);
  });  
  
  let brewery = beer.state.brewery;
  
  it('should fetch the brewery.', function () {
    expect(brewery).toBeDefined();
    expect(brewery).toEqual(mockBrewery);
  });    
});