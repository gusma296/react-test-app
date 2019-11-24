import React from "react";
import "./style/styles.css";
const ModalProduct = ({ handleClose, show, item }) => {
  const showHideClassname = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassname}>
      <section className="modal-main">
        <h3>Product Detail</h3>
        {item && (
          <table style={{ width: "50%" }}>
            <tbody>
              <tr>
                <td>ID</td>
                <td> {item.id}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td> {item.name}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td> {item.price}</td>
              </tr>
              <tr>
                <td>description</td>
                <td> {item.description}</td>
              </tr>
            </tbody>
          </table>
        )}
        <button id="btn" className={"button-apply"} onClick={handleClose}>
          Ok
        </button>
      </section>
    </div>
  );
};

export default ModalProduct;
