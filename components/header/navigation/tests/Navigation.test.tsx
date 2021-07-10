import React from 'react'
import {shallow} from 'enzyme';
import Navigation from "../Navigation";
import messages from "../../messages/messages";
describe('Navigation component', () => {
    it('should render without throwing an error', ()=> {
        const wrapper = shallow(<Navigation data={messages}/>);
        expect(wrapper).toMatchSnapshot();
    })
});