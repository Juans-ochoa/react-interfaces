import React, { useRef } from "react";
import "./style.css";
import useSelect from "./useSelect";

export const InputSelect = ({
  items = [],
  name,
  placeholder,
  onChange,
  value,
  complementProps,
}) => {
  const itemsRef = useRef(null);
  const arrowRef = useRef(null);

  const select = useSelect({
    name,
    value,
    items,
    arrowRef,
    itemsRef,
    onChange,
    complementProps,
  });
  const { label, setLabel, getValue, showListSelect, listItems } = select;

  return (
    <div className="select__select">
      <input
        type="text"
        name={name}
        value={label}
        onFocus={() => showListSelect()}
        placeholder={placeholder}
        onChange={(e) => setLabel(e.target.value)}
      />
      <ul className="items__select" ref={itemsRef}>
        {listItems.length > 0 ? (
          <React.Fragment>
            {listItems.map((item, i) => (
              <li
                key={i}
                className="item__select"
                onClick={() => getValue(item)}
              >
                {typeof item === "string" || typeof item === "number"
                  ? item
                  : item.name}
              </li>
            ))}
          </React.Fragment>
        ) : (
          <li className="item__select">No data...</li>
        )}
      </ul>
      <i
        className="arrow__select"
        ref={arrowRef}
        onClick={() => showListSelect(true)}
      ></i>
    </div>
  );
};
