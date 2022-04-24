import React from "react";

const SearchStatus = (props) => {
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "Человек тусанет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "Человека тусанут";
    if (lastOne === 1) return "Человек тусанет";
    return "Человек тусанет";
  };
  return (
    <h2>
      <span
        className={
          "badge bg-" + (props.users.length > 0 ? "primary" : "danger")
        }
      >
        {props.users.length > 0
          ? `${props.users.length} ${renderPhrase(
              props.users.length
            )} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </h2>
  );
};

export default SearchStatus;
