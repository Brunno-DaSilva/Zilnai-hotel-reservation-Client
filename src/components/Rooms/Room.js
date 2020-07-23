import React, { Component } from "react";
import "./rooms.css";
import RoomsCard from "./RoomsCard";
import HOTEL_ROOMS from "./hotel_rooms-data";

class Room extends Component {
  state = {
    roomInfo: HOTEL_ROOMS,
    show: false,
    currentModal: "",

    showReservation: false,
    userReservation: [],
    currentReservation: "",

    formInputs: {
      userName: "",
      phoneNumber: "",
      email: "",
      address: "",
      card: "",
      cvc: "",
      checkIn: "",
      checkOut: "",
      roomName: "",
    },
  };

  // Display and Close Room information
  onClose = (e) => {
    this.setState({
      show: false,
    });
  };

  showModal = (data) => {
    this.setState({
      show: true,
      currentModal: data.id,
    });
  };

  // Display and Close Reservation form

  displayReservation = (data) => {
    this.setState({
      showReservation: true,
      currentReservation: data.id,
    });
  };

  onCloseReservation = (data) => {
    this.setState({
      showReservation: false,
      currentReservation: data.id,
    });
  };
  //Form information

  handleChange = (event) => {
    const updateInput = Object.assign(this.state.formInputs, {
      [event.target.id]: event.target.value,
    });
    this.setState(updateInput);
  };

  render() {
    const {
      roomInfo,
      show,
      currentModal,
      showReservation,
      userReservation,
      currentReservation,
      formInputs,
    } = this.state;

    return (
      <div className="container">
        <RoomsCard
          show={show}
          roomInfo={roomInfo}
          currentModal={currentModal}
          showReservation={showReservation}
          userReservation={userReservation}
          currentReservation={currentReservation}
          formInputs={formInputs}
          onCloseReservation={this.onCloseReservation}
          handleChange={this.handleChange}
          displayReservation={this.displayReservation}
          showModal={this.showModal}
          onClose={this.onClose}
        />
      </div>
    );
  }
}

export default Room;
