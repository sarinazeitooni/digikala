import React from 'react'
import {shallow} from 'enzyme';
import TopHeader from "../TopHeader";
describe('TopHeader component', () => {
    it('should render without throwing an error', ()=> {
        const wrapper = shallow(<TopHeader/>);
        expect(wrapper).toMatchSnapshot();
    })
});