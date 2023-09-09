import React, { useState } from 'react'
import './App.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { NavDropdown } from "react-bootstrap";
import useCheckTransaction from './Requests/useCheckTransaction';
import SearchBar from './Components/SearchBar';

const Header = () => {

    const [value, setValue] = useState("");
    const { hash, setHash } = useCheckTransaction();
    // console.log(hash, "KKKKKKKKKKKKKKKKDDDDDDDDDDD")
    const navigate = useNavigate();

    let searchingValue = (value) => {
        console.log("value", value);
        if (value !== undefined && value?.length > 0) {
            if (/^\d*$/.test(value)) {
                navigate("/blockDetail/" + value);
            } else if (value.length <= 48) {
                navigate("/address/" + value);
            } else {
                setHash(value);
            }
        }
    };

    let options = [
        { value: "blocknumber", label: "Block Number", color: "#152A59" },
        { value: "txHash", label: "Transaction Hash", color: "#152A59" },
        { value: "address", label: "Address", color: "#152A59" },
        { value: "blockhash", label: "Block Hash", color: "#152A59" },
    ];
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Streakk</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/listBlocks">Blocks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/transactions">Transactions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/faucet">Faucet</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/even">Even</a>
                        </li>
                    </ul>
                </div>
            </nav>



            <div className="input-group"

                onClick={(event) => {
                    event.preventDefault();
                    searchingValue(value);
                }}
            >
                <SearchBar searchingValue={searchingValue} setValue={setValue} />

            </div>

        </React.Fragment>



    )
}

export default Header