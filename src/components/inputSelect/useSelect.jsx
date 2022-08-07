import { useEffect, useState } from "react";

const useSelect = (params) => {
  const { name, value, options, onChange, onBlur, readOnly } = params;

  const [optionText, setOptionText] = useState("");
  const [localOptions, setLocalOptions] = useState([]);
  const [selectOption, setSelectOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [selectValue, setSelectValue] = useState(false);
  const [callOnBlur, setCallOnBlur] = useState(false);

  const getValue = (item) => {
    setSelectOption({ ...item });
    setSelectValue(true);
  };

  const hiddenOptions = () => {
    setTimeout(() => {
      setShowOptions(false);
      setCallOnBlur(true);
    }, 200);
  };

  useEffect(() => {
    if (selectValue) {
      onChange({ name, value: selectOption.value });
      setShowOptions(false);
      setSelectValue(false);
    }
  }, [selectValue, selectOption]);

  useEffect(() => {
    if (callOnBlur) {
      onBlur({ name, value: selectOption ? selectOption.value : "" });
      setCallOnBlur(false);
    }
  }, [callOnBlur, selectOption]);

  useEffect(() => {
    if (readOnly) return;
    const optionsFilter = options.filter(({ label }) =>
      label.includes(optionText)
    );
    setLocalOptions(optionsFilter);
  }, [optionText, readOnly]);

  useEffect(() => {
    if (value.length < 1) return setLocalOptions(options);
    setOptionText(value[0].label);
  }, [value]);

  return {
    optionText,
    setOptionText,
    getValue,
    showOptions,
    setShowOptions,
    hiddenOptions,
    localOptions,
  };
};

export default useSelect;
