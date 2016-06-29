jest.unmock('../app/components/brewery.jsx');
jest.unmock('../__mocks__/brewery.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Brewery from '../app/components/brewery.jsx';
import mockBrewery from '../__mocks__/brewery.js';
    
describe('App', () => {
  let brewery = TestUtils.renderIntoDocument(
    <Brewery key={mockBrewery._KEY} data={mockBrewery} />
  );
  
  it('should be instantied correctly.', () => {
    expect(brewery).toBeDefined();
    expect(brewery instanceof Brewery).toBeTruthy();
  });
  
  const breweryNode = ReactDOM.findDOMNode(brewery);
  
  it('should be rendered.', () => {
    expect(breweryNode).toBeDefined();
  }); 
  
  it('should have a data property.', () => {
    expect(brewery.props.data).toBeDefined();
    expect(typeof brewery.props.data.ID).toBe('number');
    expect(brewery.props.data.ID).toEqual(mockBrewery.ID);
  });      
});