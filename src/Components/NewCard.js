import React from "react";
// import "./Dashboard.scss";

const NewCard = ({ className, title, amount }) => {
    return (
        <>
            <div className={`card_content ${className}`}>
                <h4>{title}</h4>
                <h2>{amount}</h2>
                <span></span>
            </div>
        </>
    );
};

export default NewCard;