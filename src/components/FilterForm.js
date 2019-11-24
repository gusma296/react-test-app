import React, { useState, useContext } from "react";
import "./style/styles.css";
import { DispatchContext } from "../App";

const FilterForm = () => {
  const [id, setId] = useState("");
  const [name, setname] = useState("");
  const dispatchs = useContext(DispatchContext);
  const handleChangeId = event => setId(event.target.value);
  const handleChangeName = event => setname(event.target.value);

  const handleFilter = () => {
    if (id || name) {
      dispatchs({ type: "APPLY_FILTER", id: id, name: name });
    } else {
      alert("form kosong");
    }

    setname("");
    setId("");
  };

  return (
    <div className="filter-form">
      <h3>Filter</h3>
      <form id="form-filter" onSubmit={handleFilter}>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  value={name}
                  id='name'
                  onChange={handleChangeName}
                  className="input"
                />
              </td>
            </tr>
            <tr>
              <td>Id</td>
              <td>
                <input
                  id='id'
                  type="text"
                  value={id}
                  onChange={handleChangeId}
                  className="input"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="button-apply">
          Apply
        </button>
      </form>
    </div>
  );
};

export default FilterForm;
