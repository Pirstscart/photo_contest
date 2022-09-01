import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, 
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../assets/logo.png'
import logoo from '../assets/logoo.png'

export default class Hearders extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Router>
                <MDBNavbar color="#ffffff white" dark expand="md">
                    <MDBNavbarBrand>
                        <img src={logo} width="40" /><img src={logoo} width="200" />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler className="black" onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" color="dark" dark isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem style={{fontSize:"18px", fontWeight: "bold"}}>
                                <a className="nav-link black-text" href="#">หัวข้อประกวด</a>
                            </MDBNavItem>
                            <MDBNavItem style={{fontSize:"18px", fontWeight: "bold"}}>
                                <a className="nav-link black-text" href="#">รางวัล</a>
                            </MDBNavItem>
                            <MDBNavItem style={{fontSize:"18px", fontWeight: "bold"}}>
                                <a className="nav-link black-text" href="#">กติกา</a>
                            </MDBNavItem>
                            <MDBNavItem style={{fontSize:"18px", fontWeight: "bold"}}>
                                <a className="nav-link text-primary" href="#"><span className="rounded border border-primary p-1">ดาวน์โหลดเอกสาร</span></a>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        );
    }


}

