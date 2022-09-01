import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer} from 'mdbreact';
import iconn from '../assets/logoo.png'

export default class Footer extends Component {

  render() {
    return (
      <div>
        <MDBContainer fluid>
            <img src={iconn} width="500" />
        </MDBContainer>
      </div>
    );
  }
}
