/**
 * this test will make jest import all required module before running other tests
 */
import "@babel/polyfill";
import App from '.';
import render from '../helpers/enzyme';

describe("Rendering the entire application", () => {
  it('whole app should render successfully', done => {
    const wrapper = render(App);
    expect(wrapper);
    done();
  })
});
