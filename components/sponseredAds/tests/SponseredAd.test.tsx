import React from 'react'
import {shallow} from 'enzyme';
import SponseredAds from "../SponseredAds";
describe('SponseredAds component', () => {
    it('should render without throwing an error', ()=> {
        const wrapper = shallow(<SponseredAds/>);
        expect(wrapper).toMatchSnapshot();
    })
});