import React from "react";
import { mount } from "enzyme";

//components
import Footer from "../../components/Footer";

describe("<Footer />", () => {
  const footer = mount(<Footer />);

  test("Render del componente Footer", () => {
    expect(footer.length).toEqual(1);
  });
  test("Render del Título", () => {
    expect(footer.find(".Footer-title").text()).toEqual("Store Conf");
  });
});
