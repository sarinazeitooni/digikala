import {shallow} from "enzyme";
import Category from "../Category";
describe("category component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<Category/>);
        expect(container).toMatchSnapshot();
    })
});