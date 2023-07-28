import React, { useEffect, useRef, useState } from 'react'
import './css/DropDown.css';

const DropDown = ({ options, selectedOptions, onSelect }) => {

    const [inputValue, setInputValue] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Attach a click event listener to the document to close the dropdown when clicking outside
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleOptionClick = (option) => {
        if (!selectedOptions.includes(option)) {
            onSelect((prevSelected) => [...prevSelected, option]);
        } else {
            onSelect((prevSelected) => prevSelected.filter((item) => item !== option));
        }
        setInputValue('');
    };

    const toggleDropdown = () => {
        setDropdownVisible((prevVisible) => !prevVisible);
    };



    return (
        <div className="startup__custom-dropdown" ref={dropdownRef} >
            <div className="startup__chips-container" onClick={toggleDropdown}>
                {selectedOptions.map((option) => (
                    <div key={option} className="startup__chip">
                        {option}
                        <span className="startup__remove-icon" onClick={() => handleOptionClick(option)}>
                            &times;
                        </span>
                    </div>
                ))}
            </div>
            <div
                className={`startup__dropdown-arrow ${dropdownVisible ? 'open' : ''} ${selectedOptions.length > 0 ? 'selected' : ''
                    }`}
                onClick={toggleDropdown}
            >
                &#9650;
            </div>
            {dropdownVisible && (
                <div className="startup__options-list">
                    {options.map((option) => (
                        <div
                            key={option}
                            className={`startup__option ${selectedOptions.includes(option) ? 'startup__option_selected' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                            {selectedOptions.includes(option) && <span className="startup__tick">✓</span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropDown