import * as React from "react";
import {shallow} from "enzyme";
import AppRoot from "./AppRoot";

test("renders without crashing", () => {
  const wrapper = shallow(<AppRoot name={"boogers"}/>);
  expect(wrapper.text()).toEqual("Hello, boogers!");
});