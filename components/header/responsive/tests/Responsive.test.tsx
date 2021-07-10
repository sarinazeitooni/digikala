import React from 'react'
import {shallow} from 'enzyme';
import ResponsiveHeader from "../ResponsiveHeader";
describe('ResponsiveHeader component', () => {
    it('should render without throwing an error', ()=> {
        const wrapper = shallow(<ResponsiveHeader/>);
        expect(wrapper).toMatchSnapshot();
    })
});