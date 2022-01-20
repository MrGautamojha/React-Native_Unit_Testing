import React from 'react';
import Login from '../src/screen/Login/Login';
import { shallow } from 'enzyme';
import store from '../src/redux/store';

let wrapper, instance;

describe('App', () => {
  beforeEach(() => {
    wrapper = shallow(<Login.reactComponent />);
    instance = wrapper.instance()
  })
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  test("blank state", () => {
    let loginState = instance.state;
    expect(loginState.email).toStrictEqual('');

  })
  test("onChangeText", () => {
    wrapper.find('TextInput').at(0).simulate('changeText', 'gautamojha1998@gmail.com');
    wrapper.find('TextInput').at(1).simulate('changeText', '1234567');
    expect(instance.state.email).toBe("gautamojha1998@gmail.com");
    expect(instance.state.password).toBe("1234567");
  })

  test("on naviagtion", () => {
    let navigateSpy = jest.spyOn(instance, 'navigateToClearStack1')
    instance.navigateToClearStack1()
    expect(navigateSpy).toBeCalled()
  })

  test("mapStateToProps", () => {
    let m = Login.mapStateToProps(store.getState())
    // let s
    expect(m.profile.data).toStrictEqual([]);
    expect(m.profile.countryList).toStrictEqual([]);
  })
  test("mapStateToProps", () => {
    let navigateSpy = jest.spyOn(instance, 'navigateToClearStack1')
    instance.navigateToClearStack1()
    expect(navigateSpy).toBeCalled()
  })
});