import * as React from 'react';
import {shallow} from "enzyme";
import AdImage from "../AdImage";
describe("ad image component",()=>{
    it("should match snap shot" , ()=>{
        const wrapper = shallow(<AdImage/);
        expect(wrapper).toMatchSnapshot();
    });
    it("should render image correctly" , ()=>{
        const wrapper = shallow(<AdImage/>);
        const container = wrapper.find("div.ad-image-container");
        expect(container.exists()).toBe(true);
    });
});