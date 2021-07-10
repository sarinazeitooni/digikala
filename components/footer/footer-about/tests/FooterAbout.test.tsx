import {shallow} from "enzyme";
import FooterAbout from "../FooterAbout";
describe("FooterAbout component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<FooterAbout/>);
        expect(container).toMatchSnapshot();
    })
});