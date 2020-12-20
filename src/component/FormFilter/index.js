import React from "react";
import { useDispatch } from "react-redux";
import {
  searchForTitle,
  onChangeRecordOnPage,
  onChangeFieldSearch,
} from "../../action";

const SORTBY = [
  { title: "SORT BY CreatedAt", value: "CreatedAt" },
  { title: "SORT BY NAME", value: "name" },
  { title: "SORT BY ID", value: "id" },
];

const FormFilter = () => {
  const dispatch = useDispatch();

  const onSearch = (event) => {
    if (event.key === "Enter") {
      var articleCondition = localStorage.getItem("conditonSearch");
      dispatch(searchForTitle(JSON.parse(articleCondition)));
    }
    dispatch(onChangeFieldSearch(event.target.name, event.target.value));
  };

  const onChangeSortByColumn = (e) => {
    dispatch(onChangeFieldSearch("sortBy", e.target.value));
    var articleCondition = localStorage.getItem("conditonSearch");
    dispatch(searchForTitle(JSON.parse(articleCondition)));
  };
  return (
    <>
      <div
        className="form-row"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <div className="form-group col-md-4">
          <label>Search</label>
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Please input and Enter"
            onKeyUp={onSearch}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Sort</label>
          <select className="form-control" onChange={onChangeSortByColumn}>
            {SORTBY.map((column, key) => (
              <option key={key} name={column.title} value={column.value}>
                {column.title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-2">
          <label>Number Record</label>
          <select
            className="form-control"
            onChange={(e) => dispatch(onChangeRecordOnPage(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FormFilter;
