import {shallow} from "enzyme";
import Footer from "../Footer";
describe("Footer component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<Footer/>);
        expect(container).toMatchSnapshot();
    })
});