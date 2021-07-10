import {shallow} from "enzyme";
import SingleItem from "../SingleItem";
describe("SingleItem component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<SingleItem/>);
        expect(container).toMatchSnapshot();
    })
});