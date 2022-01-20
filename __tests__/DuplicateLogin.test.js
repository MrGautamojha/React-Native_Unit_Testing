import React from 'react';
import Login from '../src/screen/Login/Login';
import { shallow } from 'enzyme';
import store from '../src/redux/store';
import DuplicateLogin from '../src/screen/Login/DuplicateLogin';

let wrapper, instance;
let state = {
    data: ''
}

describe('App', () => {
    beforeEach(() => {
        wrapper = shallow(<DuplicateLogin state={state} />);
        console.log(wrapper)
    })
    test('snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
})