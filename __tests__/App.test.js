/**
 * @format
 */
 import React from 'react';
 import { shallow } from "enzyme";
 import  App  from "../App";
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App', function () {
  it('App', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  });
});
