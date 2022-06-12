import { useEffect, useState } from "react";

const useSelect = (params) => {
  const { name, value, items, arrowRef, itemsRef, onChange, complementProps } =
    params;

  const [label, setLabel] = useState("");
  const [localValue, setLocalValue] = useState(value);
  const [listItems, setListItems] = useState([]);

  const getValue = (item) => {
    console.log(item);
    setLocalValue(
      typeof item === "string" || typeof item === "number" ? item : item.id
    );
    setLabel(
      typeof item === "string" || typeof item === "number" ? item : item.label
    );

    itemsRef.current.style.display = "none";
    arrowRef.current.classList.remove("active__arrow");
  };

  const showListSelect = (arrowActive = false) => {
    if (!arrowActive) {
      arrowRef.current.classList.add("active__arrow");
      itemsRef.current.style.display = "block";
    } else {
      arrowRef.current.classList.toggle("active__arrow");

      if (arrowRef.current.classList.length === 1) {
        itemsRef.current.style.display = "none";
        return;
      }
      itemsRef.current.style.display = "block";
    }
  };

  useEffect(() => {
    if (label === "") setListItems(items);
    setListItems(items.filter((item) => item.includes(label)));
  }, [label]);

  useEffect(() => {
    onChange({ value: localValue, name, complementProps });
  }, [localValue]);

  useEffect(() => {
    const itemsFilter = items.filter((item) => item.includes(value));
    if (itemsFilter.length === 1)
      setLabel(
        typeof itemsFilter[0] === "string"
          ? itemsFilter[0]
          : itemsFilter[0].label
      );
    setListItems(itemsFilter);
  }, [value]);

  return {
    label,
    listItems,
    setLabel,
    getValue,
    showListSelect,
  };
};

export default useSelect;
