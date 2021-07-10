import {shallow} from "enzyme";
import CategoriesCard from "../CategoriesCard";
describe("Categories Card component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<CategoriesCard/>);
        expect(container).toMatchSnapshot();
    })
});