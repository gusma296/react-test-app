import React, { useState } from "react";
import "./style/styles.css";
import { ModalProduct } from "../components";

const ProductList = ({ data }) => {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  const [sort, setSort] = useState({
    id: true,
    name: true,
    price: true,
    desc: true
  });
  const sorted = data.sort((a, b) => {
    if (sort.name === true) {
      return 1 * a.name.localeCompare(b.name);
    }
    if (sort.name === false) {
      return -1 * a.name.localeCompare(b.name);
    }
    if (sort.desc === true) {
      return 1 * a.description.localeCompare(b.description);
    }
    if (sort.desc === false) {
      return -1 * a.description.localeCompare(b.description);
    }
    if (sort.id === true) {
      return 1 * a.id.localeCompare(b.id);
    }
    if (sort.id === false) {
      return -1 * a.id.localeCompare(b.id);
    }
    if (sort.price === true) {
      return 1 * a.price.localeCompare(b.price);
    }
    if (sort.price === false) {
      return -1 * a.price.localeCompare(b.price);
    }
  });

  const showModal = item => {
    setShow(true);
    setProduct(item);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleSortName = () => {
    setSort({ name: !sort.name });
  };
  const handleSortDesc = () => {
    setSort({ desc: !sort.desc });
  };
  const handleSortId = () => {
    setSort({ id: !sort.id });
  };
  const handleSortPrice = () => {
    setSort({ price: !sort.price });
  };
  return (
    <div>
      {sorted.length > 0 ? (
        <table className="table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th onClick={handleSortId} className={"th"}>
                Id{" "}
                <img
                  alt="sort"
                  src="https://image.flaticon.com/icons/png/512/36/36861.png"
                />
              </th>
              <th onClick={handleSortName} className={"th"}>
                Name{" "}
                <img
                  alt="sort"
                  src="https://image.flaticon.com/icons/png/512/36/36861.png"
                />
              </th>
              <th onClick={handleSortPrice} className={"th"}>
                Price{" "}
                <img
                  alt="sort"
                  src="https://image.flaticon.com/icons/png/512/36/36861.png"
                />
              </th>
              <th onClick={handleSortDesc} className={"th"}>
                Descriptions{" "}
                <img
                  alt="sort"
                  src="https://image.flaticon.com/icons/png/512/36/36861.png"
                />
              </th>
            </tr>
          </thead>
          {sorted.map((item, key) => {
            return (
              <tbody key={key}>
                <tr>
                  <td className={"td"} onClick={() => showModal(item)}>
                    {item.id}
                  </td>
                  <td className={"td"}>{item.name}</td>
                  <td className={"td"}>{item.price}</td>
                  <td className={"td"}>{item.description}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      ) : (
        <div>
          <h4>Data tidak ditemukan</h4>
        </div>
      )}
      <ModalProduct show={show} item={product} handleClose={handleClose} />
    </div>
  );
};

export default ProductList;
