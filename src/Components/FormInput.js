import React from "react";
import './FormInput.css'
function FormInput({ name, placeholder, type, value, onChange, onKeyUp }) {
    return (






        <div className="d-flex justify-content-center h-100">
            <div className="search">
                <input
                    className="search-input"
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                    autoComplete="off"
                />
                <a href="#" className="search-icon">
                    <i className="fa fa-search"></i>
                </a>
            </div>
        </div>
    );
}

export { FormInput };