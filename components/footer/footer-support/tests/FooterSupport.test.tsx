import {shallow} from "enzyme";
import FooterSupport from "../FooterSupport";
describe("FooterSupport component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<FooterSupport/>);
        expect(container).toMatchSnapshot();
    })
});