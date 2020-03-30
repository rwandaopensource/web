import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

export const render =  (Component, args = {}) => shallow(<Component { ...args } />);
export const renderWithRedux = (Componet, store) => {
  const props = createStore(combineReducers(store), compose(applyMiddleware(thunk)));
  return mount(<Provider store={props}> <Componet /> </Provider>);
};
