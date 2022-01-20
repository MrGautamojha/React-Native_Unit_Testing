// const Enzyme = require('enzyme');
// const Adapter = require('enzyme-adapter-react-16');
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });