import App from '../app/index.jsx';

describe('App', () => {
  const app = new App();
  
  it('should be instantied correctly.', () => {
    expect(app).toBeDefined();
    expect(app instanceof App).toBeTruthy();
  });
  
});