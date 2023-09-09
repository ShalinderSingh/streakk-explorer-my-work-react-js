import React from 'react'
import { Nav, NavDropdown, NavLink, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LayoutHeader = () => {
    return (
        <React.Fragment>

            <div
            // className={`headerOuter ${hasSidebar === "true" ? "has-banner-layout-header" : ""
            //     }`}
            >
                <div className="commonCard mainHeader">
                    <div className="mainHeader">
                        <div className="leftSide">

                            <Link to="/">
                                {/* <Logo /> */}
                            </Link>
                            <div className="dropdownOuter">



                            </div>
                        </div>
                        <div className="rightSide">
                            <Navbar expand="lg">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <NavLink
                                            className={({ isActive }) => (isActive ? "active" : null)}
                                            to="/home"
                                        >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            className={({ isActive }) => (isActive ? "active" : null)}
                                            to="/blocks"
                                        >
                                            Blocks
                                        </NavLink>
                                        <NavLink
                                            className={({ isActive }) => (isActive ? "active" : null)}
                                            to="/transactions"
                                        >
                                            Transactions
                                        </NavLink>
                                        <NavLink
                                            className={({ isActive }) => (isActive ? "active" : null)}
                                            to="/faucet"
                                        >
                                            Faucet
                                        </NavLink>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>

                            {/* <div className="dropdownOuter">
              {!window.location.pathname.includes("/wallet") ? (
                <NavDropdown
                  title={
                    NETWORKS_AVIALABLE[currentNetwork] === "Test Network"
                      ? "Testnet"
                      : ""
                  }
                >
                  {NETWORKS_AVIALABLE.map((opt, index) => {
                    return (
                      <NavDropdown.Item
                        onClick={() => changeNetwork(index)}
                        key={index}
                        className="testnet_dropdown"
                      >
                        {opt === "Test Network" ? "Testnet" : ""}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              ) : null}
            </div> */}

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="searchBlock">
     
      <Logo />
      <div
        className="searchBar"
        onClick={(event) => {
          event.preventDefault();
          searchingValue(value);
        }}
      >
        <Search searchingValue={searchingValue} setValue={setValue} />
      </div>
    </div> */}
        </React.Fragment>
    )
}

export default LayoutHeader