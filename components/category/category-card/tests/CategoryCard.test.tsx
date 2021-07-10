import {shallow} from "enzyme";
import CategoryCard from "../CategoryCard";
describe("CategoryCard component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<CategoryCard/>);
        expect(container).toMatchSnapshot();
    })
});