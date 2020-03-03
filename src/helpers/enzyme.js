import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default (Component, args = {}) => shallow(<Component { ...args } />);
export { mount } from 'enzyme';
export { render } from 'enzyme';
export { configure } from 'enzyme';
export { shallow } from 'enzyme';
export { default as Enzyme } from 'enzyme';
