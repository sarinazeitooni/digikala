import React from 'react'
import {shallow} from 'enzyme';
import Main from "../main";

describe('main component', () => {
        it('should render without throwing an error', ()=> {
            const wrapper = shallow(<Main/>);
            expect(wrapper).toMatchSnapshot();
        })
});