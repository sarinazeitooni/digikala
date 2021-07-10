import {shallow} from "enzyme";
import FooterPartners from "../FooterPartners";
describe("FooterPartners component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<FooterPartners/>);
        expect(container).toMatchSnapshot();
    })
});