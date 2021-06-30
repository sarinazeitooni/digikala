import React from 'react';
import {shallow} from "enzyme";
import AdImage from "../components/header/Ad/AdImage";
describe("ad image component",()=>{
    it("should match snap shot" , ()=>{
        const wrapper = shallow(<AdImage image="test"/>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should render image correctly" , ()=>{
        const wrapper = shallow(<AdImage image="test"/>);
        const container = wrapper.find("div.ad-image-container");
        expect(container.exists()).toBe(true);
    });
});