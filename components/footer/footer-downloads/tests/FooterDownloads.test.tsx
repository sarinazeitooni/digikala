import {shallow} from "enzyme";
import FooterDownloads from "../FooterDownloads";
describe("FooterDownloads component" , ()=>{
    it("should render correctly" , ()=>{
        const container = shallow(<FooterDownloads/>);
        expect(container).toMatchSnapshot();
    })
});