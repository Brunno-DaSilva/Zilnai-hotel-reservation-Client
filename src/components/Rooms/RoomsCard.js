import React, { Component } from "react";
import "./rooms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faUsers,
  faExpand,
  faBan,
  faHeart,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal/Modal";
import Reservation from "../Reservation/Reservation";

const RoomCards = ({
  roomInfo,
  handleChange,
  onCloseReservation,
  formInputs,
  currentReservation,
  userReservation,
  currentModal,
  show,
  showReservation,
  displayReservation,
  showModal,
  onClose,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="rooms-title">
        <h1>Rooms</h1>
      </div>

      {roomInfo.map((info) => {
        return (
          <div key={info.id} className="rooms-card">
            <div className="left-col">
              <div className="featured-position">
                {info.featured ? (
                  <div className="lower-price">Featured</div>
                ) : (
                  <div></div>
                )}
                <img
                  src="https://source.unsplash.com/collection/3448800/"
                  alt={info.name}
                />
              </div>
            </div>
            <div className="center-col">
              <div>
                <h2>{info.name}</h2>
              </div>
              <div className="room-additional-info">
                <div>
                  <p>
                    <i>
                      <FontAwesomeIcon icon={faUsers} />
                    </i>
                    {info.capacity}
                  </p>
                </div>
                <div>
                  <p>
                    <i>
                      <FontAwesomeIcon icon={faBed} />
                    </i>
                    {info.roomType}
                  </p>
                </div>
                <div>
                  <p>
                    <i>
                      <FontAwesomeIcon icon={faExpand} />
                    </i>
                    {info.size}m²
                  </p>
                </div>

                <div className="btn-more-info-holder">
                  <button
                    className="btn-more-info"
                    onClick={(e) => {
                      showModal(info);
                    }}
                  >
                    More Info
                  </button>
                </div>

                <Modal
                  onClose={showModal}
                  show={show && currentModal === info.id}
                >
                  <div className="modal">
                    <div className="modal-container">
                      <div>
                        <h3>{info.name}</h3>
                      </div>
                      <div className="modal-header">
                        <div className="featured-position">
                          {info.featured ? (
                            <div className="lower-price">Featured</div>
                          ) : (
                            <div></div>
                          )}
                          <img
                            src="https://source.unsplash.com/collection/3448800/"
                            alt={info.name}
                          />
                        </div>
                      </div>
                      <div className="modal-body">
                        <div className="top-info">
                          <div>
                            <h4>Room Description:</h4>
                            <p>{info.description}</p>
                          </div>
                        </div>

                        <div className="extra-info">
                          <div>
                            <p>{info.extras1}</p>
                          </div>
                          <div>
                            <p>{info.extras2}</p>
                          </div>
                          <div>
                            <p>{info.extras3}</p>
                          </div>
                          <div>
                            <p>{info.extras4}</p>
                          </div>
                          <div>
                            <p>{info.extras5}</p>
                          </div>
                          <div>
                            <p>{info.extras6}</p>
                          </div>
                        </div>
                        <div className="bottom-info">
                          <div>
                            <p>
                              <i>
                                <FontAwesomeIcon icon={faUsers} />
                              </i>
                              {info.capacity}
                            </p>
                          </div>
                          <div>
                            <p>
                              <i>
                                <FontAwesomeIcon icon={faBed} />
                              </i>
                              {info.roomType}
                            </p>
                          </div>
                          <div>
                            <p>
                              <i>
                                <FontAwesomeIcon icon={faExpand} />
                              </i>
                              {info.size}m²
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <div className="btn-close-container">
                          <button className="btn-close" onClick={onClose}>
                            Close info
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
            <div className="right-col">
              <div className="price-title">
                <h3 className="price-bold">${info.price}</h3>
                <p>per night</p>
              </div>
              <div>
                <div>
                  {info.breakfast ? (
                    <p className="allowed">
                      <i>
                        <FontAwesomeIcon icon={faHeart} />
                      </i>
                      Breakfast
                    </p>
                  ) : (
                    <p className="not-allowed">
                      <i>
                        <FontAwesomeIcon icon={faBan} />
                      </i>
                      Breakfast
                    </p>
                  )}
                </div>
                <div>
                  {info.pets ? (
                    <p className="allowed">
                      <i>
                        <FontAwesomeIcon icon={faPaw} />
                      </i>
                      Pets allowed
                    </p>
                  ) : (
                    <p className="not-allowed">
                      <i>
                        <FontAwesomeIcon icon={faBan} ariaHidden="true" />
                      </i>
                      No P e t s
                    </p>
                  )}
                </div>
              </div>
              <div className="btn-reserve-holder">
                <button
                  className="btn-more-info"
                  onClick={(e) => {
                    displayReservation(info);
                  }}
                >
                  Reserve
                </button>
              </div>

              <Reservation
                onCloseReservation={showReservation}
                showReservation={
                  showReservation && currentReservation === info.id
                }
              >
                <div className="modal">
                  <div className="modal-container">
                    <div className="title-form">
                      <h3>Reservation</h3>
                    </div>
                    <div className="modal-header">
                      <div className="featured-position">
                        {info.featured ? (
                          <div className="lower-price">Featured</div>
                        ) : (
                          <div></div>
                        )}
                        <img
                          src="https://source.unsplash.com/collection/3448800/"
                          alt={info.name}
                        />
                      </div>
                    </div>
                    <div className="modal-body">
                      <div>
                        <div>
                          <form onSubmit={handleSubmit}>
                            <label htmlFor="userName">Full Name: </label>
                            <input
                              type="text"
                              id="userName"
                              required=""
                              value={formInputs.userName}
                              onChange={handleChange}
                            />
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                              type="text"
                              id="phoneNumber"
                              required=""
                              value={formInputs.phoneNumber}
                              onChange={handleChange}
                            />
                            <label htmlFor="email">Email:</label>
                            <input
                              type="text"
                              id="email"
                              required=""
                              value={formInputs.email}
                              onChange={handleChange}
                            />

                            <label htmlFor="address">Home Address:</label>
                            <input
                              type="text"
                              id="address"
                              required=""
                              value={formInputs.address}
                              onChange={handleChange}
                            />
                            <label htmlFor="card">Card Number:</label>
                            <input
                              type="text"
                              id="card"
                              required=""
                              value={formInputs.card}
                              onChange={handleChange}
                            />
                            <label htmlFor="cvc">CVC:</label>
                            <input
                              type="text"
                              id="cvc"
                              required=""
                              value={formInputs.cvc}
                              onChange={handleChange}
                            />
                            <label htmlFor="checkIn">CheckIn:</label>
                            <input
                              type="text"
                              id="checkIn"
                              required=""
                              value={formInputs.checkIn}
                              onChange={handleChange}
                            />
                            <label htmlFor="checkOut">checkOut:</label>
                            <input
                              type="text"
                              id="checkOut"
                              required=""
                              value={formInputs.checkOut}
                              onChange={handleChange}
                            />
                            <label htmlFor="roomName">Room Name:</label>
                            <select
                              type="text"
                              id="roomName"
                              required=""
                              value={formInputs.roomName}
                              onChange={handleChange}
                            >
                              <option value="single-economy">
                                Single Economy
                              </option>
                              <option value="single-basic">Single Basic</option>
                              <option value="single-standard">
                                Single Standard
                              </option>
                              <option value="single-deluxe">
                                Single Deluxe
                              </option>
                              <option value="double-economy">
                                Double Economy
                              </option>
                              <option value="double-basic">Double Basic</option>
                              <option value="double-standard">
                                Double Standard
                              </option>
                              <option value="double deluxe">
                                Double Deluxe
                              </option>
                              <option value="family-economy">
                                Family economy
                              </option>
                              <option value="family-basic">Family Basic</option>
                              <option value="family-standard">
                                Family Standard
                              </option>
                              <option value="family-deluxe">
                                Family Deluxe
                              </option>
                              <option value="presidential-room">
                                Presidential Room
                              </option>
                            </select>
                            <input type="submit" className="submit" />
                          </form>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="modal-footer">
                      <div className="btn-close-container">
                        <button
                          className="btn-close"
                          onClick={onCloseReservation}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reservation>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomCards;
