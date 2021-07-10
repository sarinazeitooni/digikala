import {shallow} from "enzyme";
import CategorySwiper from "../CategorySwiper";
describe("CategorySwiper component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<CategorySwiper/>);
        expect(container).toMatchSnapshot();
    })
});