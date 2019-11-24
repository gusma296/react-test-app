import React, { useState, useContext } from "react";
import "./style/styles.css";

const FilterForm = ({ dispatch }) => {
  const [id, setId] = useState("");
  const [name, setname] = useState("");
  const dispatchs = useContext(dispatch);
  const handleChangeId = event => setId(event.target.value);
  const handleChangeName = event => setname(event.target.value);
  const handleFilter = event => {
    if (id || name) {
      dispatchs({ type: "APPLY_FILTER", id: id, name: name });
    } else {
      alert("form kosong");
    }

    setname("");
    setId("");
    event.preventDefault();
  };
  return (
    <div className="filter-form">
      <h3>Filter</h3>
      <form onSubmit={handleFilter}>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  value={name}
                  onChange={handleChangeName}
                  className="input"
                />
              </td>
            </tr>
            <tr>
              <td>Id</td>
              <td>
                <input value={id} onChange={handleChangeId} className="input" />
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
