import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.iter === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ iter: item, order: "asc" });
    }
  };
  //   console.log(Object.keys(columns));
  return (
    <thead>
      <tr className="table-title">
        {/* {Object.keys(columns).map((column) => {
          <th
            key={column}
            onClick={() => {
              handleSort(columns[column].iter);
            }}
            scope="col"
          >
            {columns[column].name}
          </th>;
        })} */}
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={() => handleSort(columns[column].iter)}
            scope="col"
          >
            {columns[column].name}
          </th>
        ))}
      </tr>
    </thead>
  );
};
TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableHeader;
