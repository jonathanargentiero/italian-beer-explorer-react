const mockPromise = function(returnValue) {
  let self = this;
  self.returnValue = returnValue;
  self.then = (cb) => {
    let performCallback = () => {
      self.returnValue = cb(self.returnValue);
    };
    performCallback();        
    return self;
  };
  self.catch = () => self;
  return self;
};  

export default mockPromise;