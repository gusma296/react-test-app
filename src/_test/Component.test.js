import React from "react";
import { FilterForm, ProductList, ModalProduct } from "../components";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import { productData } from "../reducers/productData";

configure({ adapter: new Adapter() });

describe("FilterForm", () => {
  it("renders", () => {
    shallow(<FilterForm />);
  });
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
