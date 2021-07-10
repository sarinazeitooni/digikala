import {shallow} from "enzyme";
import SwiperAd from "../swiper";
describe("ads component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<SwiperAd/>);
        expect(container).toMatchSnapshot();
    })
});