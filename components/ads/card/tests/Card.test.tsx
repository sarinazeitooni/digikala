import {shallow} from "enzyme";
import Card from "../Card";
describe("ads component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<Card/>);
        expect(container).toMatchSnapshot();
    })
});