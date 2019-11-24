import React from "react";
import { FilterForm, ProductList, ModalProduct } from "../components";
import { shallow, configure, mount } from "enzyme";
import { productData } from "../reducers/productData";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("FilterForm", () => {
  const submit = jest.fn()
  window.alert = jest.fn()

  it("renders", () => {
    shallow(<FilterForm />);
  });

  it("filter Form", () => {
    const wrapper = shallow(<FilterForm />);
    wrapper.find("#name").simulate("change", {
      target: {
        name: "name",
        value: "galon"
      }
    });
    wrapper.find("#id").simulate("change", {
      target: {
        name: "name",
        value: "112345"
      }
    });
  });

  it('should be action onSubmit form', () => {
    const wrapper = shallow(<FilterForm />);
    wrapper.find('#form-filter').simulate('submit')
  })

  window.alert(submit)
});

describe("ProductList", () => {
  it("renders", () => {
    shallow(<ProductList data={productData} />);
  });
});

describe("ModalProduct", () => {
  it("renders", () => {
    shallow(<ModalProduct />);
  });
});
