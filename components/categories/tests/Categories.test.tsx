import {shallow} from "enzyme";
import Categories from "../Categories";
import Data from "../data/Data";
describe("categories component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<Categories items={Data}/>);
        expect(container).toMatchSnapshot();
    })
});