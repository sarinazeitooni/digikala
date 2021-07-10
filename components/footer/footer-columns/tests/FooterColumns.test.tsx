import {shallow} from "enzyme";
import FooterColumns from "../FooterColumns";
describe("FooterColumns component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<FooterColumns/>);
        expect(container).toMatchSnapshot();
    })
});