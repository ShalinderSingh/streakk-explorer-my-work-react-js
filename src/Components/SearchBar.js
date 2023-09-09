import React, { useState } from "react";
import { FormInput } from "./FormInput";

export default function SearchBar({ searchingValue, setValue }) {
    const [inputvalue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        if (e.key === "Enter" && inputvalue.length > 0) {
            searchingValue(inputvalue);
        }
    };

    return (
        <React.Fragment>
            <FormInput
                className="form-control"
                name="search"
                placeholder="Search by Tx Hash / Address / Block / Block Hash"
                type="text"
                value={inputvalue}
                onChange={(e) => {
                    if (e.target.value.length <= 100) {
                        setInputValue(e.target.value);
                        setValue(e.target.value);
                    }
                }}
                onKeyUp={handleSubmit}
            />
            <span className="input-group-btn">
                <button className="btn btn-default" type="submit" id="addressSearch">
                    <span className="icon-search"></span>
                </button>
            </span>
        </React.Fragment>
    );
}
