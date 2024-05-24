import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faClock, faUtensils, faTags } from '@fortawesome/free-solid-svg-icons';
import './BookingForm.css';

const BookTable = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: 1,
        meal: '',
        offer: ''
    });
    
    const [confirmation, setConfirmation] = useState('');
    const [selectedMeal, setSelectedMeal] = useState('');
    
    const mealTimeSlots = {
        breakfast: ['08:00 AM', '09:00 AM', '10:00 AM'],
        lunch: ['12:00 PM', '01:00 PM', '02:00 PM'],
        dinner: ['06:00 PM', '07:00 PM', '08:00 PM']
    };

    const offers = [
        'Flat 20% off - Limited Offer',
        'Get 1 Free Dessert - Limited Offer'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleMealSelection = (meal) => {
        setSelectedMeal(meal);
        setFormData({
            ...formData,
            meal,
            time: ''
        });
    };

    const handleOfferSelection = (offer) => {
        setFormData({
            ...formData,
            offer
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmation(`Thank you, ${formData.name}! Your table for ${formData.guests} on ${formData.date} at ${formData.time} for ${formData.meal} has been booked with ${formData.offer}.`);
    };

    return (
        <div className="booking-container">
            <h1>Book a Table</h1>
            <form id="booking-form" onSubmit={handleSubmit}>
                <div className="form-section">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                    
                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} min="1" required />
                </div>

                <div className="meal-selection">
                    <h2>Select Meal</h2>
                    <div className="meal-options">
                        <button type="button" onClick={() => handleMealSelection('breakfast')}>Breakfast</button>
                        <button type="button" onClick={() => handleMealSelection('lunch')}>Lunch</button>
                        <button type="button" onClick={() => handleMealSelection('dinner')}>Dinner</button>
                    </div>
                    {selectedMeal && (
                        <div className="time-slots">
                            <h3>Select Time for {selectedMeal.charAt(0).toUpperCase() + selectedMeal.slice(1)}</h3>
                            <div className="grid">
                                {mealTimeSlots[selectedMeal].map((time, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={formData.time === time ? 'selected' : ''}
                                        onClick={() => setFormData({ ...formData, time })}
                                    >
                                        {time}
                                    </button>
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
                                className={`offer ${formData.offer === offer ? 'selected' : ''}`}
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

                <button type="submit">Proceed to Cart</button>
            </form>
            {confirmation && <div id="confirmation" className="confirmation">{confirmation}</div>}
        </div>
    );
};
export default BookTable;
