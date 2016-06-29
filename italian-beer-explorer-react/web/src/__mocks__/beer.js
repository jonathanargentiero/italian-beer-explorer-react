jest.unmock('./brewery.js');
jest.unmock('./promise.js');
import mockBrewery from './brewery.js';
import mockPromise from './promise.js';

const mockBeer = {
  "__KEY": "801",
  "__STAMP": 1,
  "ID": 801,
  "name": "Xyauyù Barrel",
  "tags": "English Barleywine",
  "alcohol": 14,
  "image": "generic.png",
  "url": "www.beeradvocate.com/beer/profile/1675/88985/",
  "tagsUrl": "www.beeradvocate.com/beer/style/152/",
  "position": 1,
  "score": 71,
  "rating": 4.28,
  "brewery": {
    "fetch": () => {
      return new mockPromise(mockBrewery);
    },
    "__deferred": {
      "uri": "/rest/Brewery(193)",
      "__KEY": "193"
    }
  }
};

export default mockBeer;