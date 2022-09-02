import { MDBContainer } from "mdbreact";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Component/Footer";
import Hearders from "./Component/Hearders";
import Home from "./Home";

export default class Routes extends Component {
    render() {
        return (<>
            <Router basename="photocontest">
                {/* <MDBContainer fluid > */}
                    <Hearders />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                    <Footer />
                {/* </MDBContainer> */}
            </Router>
        </>);
    }
}