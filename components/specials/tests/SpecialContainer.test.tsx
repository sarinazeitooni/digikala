import React from 'react'
import {shallow} from 'enzyme';
import SpecialContainer from "../SpecialContainer";
describe('SpecialContainer component', () => {
    it('should render without throwing an error', ()=> {
        const wrapper = shallow(<SpecialContainer/>);
        expect(wrapper).toMatchSnapshot();
    })
});