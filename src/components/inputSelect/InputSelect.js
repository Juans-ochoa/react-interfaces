import React from "react";
import "./style.css";
import useSelect from "./useSelect";

export const InputSelect = ({
  options,
  name,
  placeholder,
  onChange,
  value,
  complementProps,
  onBlur,
  readOnly,
}) => {
  const select = useSelect({
    name,
    value,
    options,
    onChange,
    complementProps,
    onBlur,
    readOnly,
  });

  const {
    optionText,
    setOptionText,
    getValue,
    showOptions,
    setShowOptions,
    hiddenOptions,
    localOptions,
  } = select;

  return (
    <div className="select__select">
      <input
        type="text"
        name="optionText"
        value={optionText}
        onFocus={() => setShowOptions(true)}
        placeholder={placeholder}
        onChange={(e) => setOptionText(e.target.value)}
        onBlur={hiddenOptions}
        readOnly={readOnly}
      />
      <ul className={`items__select ${showOptions ? "active_list" : ""}`}>
        {localOptions.length > 0 ? (
          <React.Fragment>
            {localOptions.map((item, i) => (
              <li
                key={i}
                className="item__select"
                onClick={() => getValue(item)}
              >
                {item.label}
              </li>
            ))}
          </React.Fragment>
        ) : (
          <li className="item__select">No data...</li>
        )}
      </ul>
      <i className="arrow__select"></i>
    </div>
  );
};
