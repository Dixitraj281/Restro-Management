import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkmark } from 'react-checkmark';
import {
  faCalendarAlt,
  faUser,
  faClock,
  faUtensils,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import "./BookingForm.css";
import {Button} from 'antd'
import { useLocation } from "react-router-dom";

const BookTable = () => {
  const location = useLocation();
  const restaurantname = location.pathname.split("/")[2];
  
  const [formData, setFormData] = useState({
    userName:"Dixit",
    name: restaurantname,
    phone: "8291441089",
    date: "",
    time: "",
    guests: 1,
    meal: "",
    offer: "",
  });

  const [confirmation, setConfirmation] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [error, setError] = useState("");
  const today = new Date().toISOString().split('T')[0];

  const mealTimeSlots = {
    breakfast: ["08:00 AM", "09:00 AM", "10:00 AM"],
    lunch: ["12:00 PM", "01:00 PM", "02:00 PM"],
    dinner: ["06:00 PM", "07:00 PM", "08:00 PM"],
  };

  const offers = [
    "Flat 20% off - Limited Offer",
    "Get 1 Free Dessert - Limited Offer",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMealSelection = (meal) => {
    setSelectedMeal(meal);
    setFormData({
      ...formData,
      meal,
      time: "",
    });
  };

  const handleOfferSelection = (offer) => {
    setFormData({
      ...formData,
      offer,
    });
  };


  const bookTable = async (details) => {
    console.log(details);
    try {
      const response = await fetch(`http://localhost:4500/booktable/${restaurantname}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!formData.date || !formData.guests || !formData.meal || !formData.time) {
      setError("Please fill in all required fields.");
      return;
    }

    setError(""); // Clear error message if validation passes

    const details = { ...formData }; // Pass formData directly

    try {
      const bookTableStatus = await bookTable(details);
      if (bookTableStatus.success) {
        setConfirmation(
          `Thank you, ${formData.userName}! Your table for ${formData.guests} on ${formData.date} at ${formData.time} for ${formData.meal} has been booked with ${formData.offer} at ${formData.name}.`
        );
        console.log(formData);
      } else {
        console.error("Booking failed:", bookTableStatus.error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="booking-container">
      <h1>Book a Table</h1>
      <form id="booking-form">
        <div className="form-section">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today}
            required
          />

          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="meal-selection">
          <h2>Select Meal</h2>
          <div className="meal-options">
            <Button
              type="button"
              onClick={() => handleMealSelection("breakfast")}
              className="selected"
            >
              Breakfast
            </Button>
            <Button className="selected" type="button" onClick={() => handleMealSelection("lunch")}>
              Lunch
            </Button>
            <Button className="selected" type="button" onClick={() => handleMealSelection("dinner")}>
              Dinner
            </Button>
          </div>
          {selectedMeal && (
            <div className="time-slots">
              <h3>
                Select Time for{" "}
                <span className="timeslot-btn">{selectedMeal.charAt(0).toUpperCase() + selectedMeal.slice(1)}</span>
              </h3>
              <div className="grid">
                {mealTimeSlots[selectedMeal].map((time, index) => (
                  <Button
                    key={index}
                    type="button"
                    className={formData.time === time ? "selected" : ""}
                    onClick={() => setFormData({ ...formData, time })}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="offers-section">
          <h2>Offers</h2>
          <div className="offers">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`offer ${
                  formData.offer === offer ? "selected" : ""
                }`}
                onClick={() => handleOfferSelection(offer)}
              >
                {offer}
              </div>
            ))}
          </div>
        </div>

        <div className="summary-section">
          <h2>Summary</h2>
          <div className="summary-item">
            <div className="summary-item-icon">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <div className="summary-item-text">
              Date: <span>{formData.date}</span>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-item-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="summary-item-text">
              Guests: <span>{formData.guests}</span>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-item-icon">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="summary-item-text">
              Time: <span>{formData.time}</span>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-item-icon">
              <FontAwesomeIcon icon={faUtensils} />
            </div>
            <div className="summary-item-text">
              Meal: <span>{formData.meal}</span>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-item-icon">
              <FontAwesomeIcon icon={faTags} />
            </div>
            <div className="summary-item-text">
              Offer: <span>{formData.offer}</span>
            </div>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <Button type="submit" className="proceed-btn" onClick={handleSubmit}>
          Proceed to Cart
        </Button>
      </form>
      {confirmation && (
        <div id="confirmation" className="confirmation">
          <Checkmark size="xLarge" className="checkmark" />
          {confirmation}
        </div>
      )}
    </div>
  );
};

export default BookTable;
