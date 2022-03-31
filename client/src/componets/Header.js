import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

const Header = () => {
  const [show, setshow] = useState(false);
  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#f8e6ea" }}>
      <MDBContainer>
        <MDBNavbarBrand
          href="/"
          style={{ color: "#606080", fontweight: "600", fontSize: "22px" }}
        >
          Touropedia
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setshow(!show)}
          style={{ color: "#606080" }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={show} navbar>
          <MDBNavbarNav
            right
            fullwidth={false}
            className="mr-auto mb-2 mb-lg-0"
          >
            <MDBNavbarItem>
              <MDBNavbarLink href="/">
                <p className="header-text">Home</p>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/addtour">
                <p className="header-text">Add Tour</p>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/dashboard">
                <p className="header-text">Dashboard</p>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/login">
                <p className="header-text">Logout</p>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/login">
                <p className="header-text">Login</p>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
