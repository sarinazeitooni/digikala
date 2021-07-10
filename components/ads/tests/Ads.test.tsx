import {shallow} from "enzyme";
import Ads from "../Ads";
describe("ads component" , ()=>{
   it("should render correctly" , ()=>{
       const container = shallow(<Ads/>);
       expect(container).toMatchSnapshot();
   })
});