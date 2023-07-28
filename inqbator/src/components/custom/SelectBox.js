import React, { useState } from 'react';
import styled from 'styled-components';

const SelectBox = ({ options, onChange }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedValues(selectedOptions);
    if (onChange) {
      onChange(selectedOptions);
    }
  };

  return (
    <StyledSelectBox multiple onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelectBox>
  );
};

const StyledSelectBox = styled.select`
  /* Add your custom dark styles here */
  background-color: #333;
  color: #fff;
  border: 2px solid #555;
  border-radius: 4px;
  padding: 8px;
  width: 200px;

  &:focus {
    outline: none;
    border-color: #9ecaed;
  }
`;

export default SelectBox;
