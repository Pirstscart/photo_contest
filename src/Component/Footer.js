import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import iconn from '../assets/logoo.png'

export default class Footer extends Component {

  render() {
    return (
      <div>
        <MDBContainer fluid className="text-center bg-white">
          <img src={iconn} width="30%" />
        </MDBContainer>
      </div>
    );
  }
}
