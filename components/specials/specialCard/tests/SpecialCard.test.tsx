import React from 'react'
import {shallow} from 'enzyme';
import SpecialCard from "../SpecialCard";
describe('SpecialCard component', () => {
    it('should render without throwing an error', ()=> {
        const wrapper = shallow(<SpecialCard/>);
        expect(wrapper).toMatchSnapshot();
    })
});