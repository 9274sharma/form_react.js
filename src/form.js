import React, { useState } from "react";

function Form() {
  const [date, setDate] = useState("");
  const [showCards, setShowCards] = useState(false);
  const [morningSlot, setMorningSlot] = useState("Available");
  const [eveningSlot, setEveningSlot] = useState("Available");
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(date);
  }

  function handleAvailability() {
    console.log("Checking availability for date: ", date);
    // Add code to check availability here
    setShowCards(true);
  }

  function handleMorningSlotBook() {
    console.log("Booking morning slot for date: ", date);
    // Add code to book the morning slot here
    setPopupText("Morning slot is booked for " + date);
    setShowPopup(true);
  }

  function handleEveningSlotBook() {
    console.log("Booking evening slot for date: ", date);
    // Add code to book the evening slot here
    setPopupText("Evening slot is booked for " + date);
    setShowPopup(true);
  }

  function handlePopupClose() {
    setShowPopup(false);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Registration Number: ", registrationNumber);
    // Add code to submit the form here
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
        <button onClick={handleAvailability}>Check Availability</button>
      </form>
      {showCards && (
        <div>
          <div className="card">
            <h3>Morning Slot</h3>
            <p>{morningSlot}</p>
            <button onClick={handleMorningSlotBook}>Book Your Show</button>
          </div>
          <div className="card">
            <h3>Evening Slot</h3>
            <p>{eveningSlot}</p>
            <button onClick={handleEveningSlotBook}>Book Your Show</button>
          </div>
        </div>
      )}
      {showPopup && (
        <div className="popup-card">
          <p>{popupText}</p>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <br />
            <label>
              Phone:
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </label>
            <br />
            <label>
              Registration Number:
              <input
                type="text"
                value={registrationNumber}
                onChange={(event) => setRegistrationNumber(event.target.value)}
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
          <button onClick={handlePopupClose}>Close</button>
        </div>
      )}
    </>
  );
}

export default Form;
