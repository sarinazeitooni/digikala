import React from 'react'
import {shallow} from 'enzyme';
import Digi from "../Digi";
import messages from "../../../../messages/messages";
describe('Digi component', () => {
    it('should render without throwing an error', ()=> {
        const wrapper = shallow(<Digi data={messages.navigation.map((item)=>{item.digiComponent})}/>);
        expect(wrapper).toMatchSnapshot();
    })
});