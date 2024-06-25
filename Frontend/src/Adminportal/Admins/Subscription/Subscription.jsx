import React, { useState } from 'react';
import './SubscriptionForm.css';
import visa from '../../../Assets/visa.png'
import Mastercard from '../../../Assets/Mastercard.png'

const SubscriptionForm = () => {
  const [selectedPlan, setSelectedPlan] = useState('Standard');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [discountCode, setDiscountCode] = useState('');
  const [isCodeApplied, setIsCodeApplied] = useState(false);
  const [users, setUsers] = useState(1);

  const plans = [
    { name: 'Plus', price: 8.99, description: 'for Individuals' },
    { name: 'Standard', price: 12.99, description: 'for Teams', details: ['1 TB of space', 'Free promotion', 'Lesser charges'] },
    { name: 'Advanced', price: 19.99, description: 'for Teams' },
  ];

  const handleDiscountApply = () => {
    // Dummy discount code logic
    if (discountCode === 'Student30') {
      setIsCodeApplied(true);
    } else {
      setIsCodeApplied(false);
    }
  };

  return (
    <div className="subscription-container">
      <h1 className="subscription-title">Subscription</h1>
      <p className="subscription-description">To keep using this account after the trial ends, set up a subscription.</p>
      <div className="subscription-form">
        <div className="select-plan">
          <h2>Select Plan</h2>
          <div className="plan-duration">
            <button className={`duration-button ${selectedPlan === 'Monthly' ? 'active' : ''}`} onClick={() => setSelectedPlan('Monthly')}>Monthly</button>
            <button className={`duration-button ${selectedPlan === 'Annually' ? 'active' : ''}`} onClick={() => setSelectedPlan('Annually')}>Annually</button>
          </div>
          {plans.map(plan => (
            <div key={plan.name} className={`plan ${selectedPlan === plan.name ? 'selected' : ''}`} onClick={() => setSelectedPlan(plan.name)}>
              <div className="plan-header">
                <div>
                  <h3>{plan.name}</h3>
                </div>
                <div>${plan.price} <span>/ Month</span></div>
              </div>
              {plan.details && (
                <ul className="plan-details">
                  {plan.details.map(detail => <li key={detail}>• {detail}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="payment-section">
          <h2>Payment</h2>
          <div className="payment-method">
            <button className={`method-button ${paymentMethod === 'PayPal' ? 'active' : ''}`} onClick={() => setPaymentMethod('PayPal')}>PayPal</button>
            <button className={`method-button ${paymentMethod === 'Credit Card' ? 'active' : ''}`} onClick={() => setPaymentMethod('Credit Card')}>Credit Card</button>
          </div>
          {paymentMethod === 'Credit Card' && (
            <div className="credit-card-info">
              <div className="card">
                <div className="card-body">
                  <img src={visa} alt="visa" className="card-image" />
                  <div className="card-number">**** **** **** 4857</div>
                <div className="card-footer">
                  <button className="edit-card">Edit</button>
                </div>
              </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <img src={Mastercard} alt="Mastercard" className="card-image" />
                  <div className="card-number">**** **** **** 8379</div>
                <div className="card-footer">
                  <button className="edit-card">Edit</button>
                </div>
              </div>
              </div>
              <button className="add-card-button">+ Add new</button>
            </div>
          )}
          <div className="discount-code">
            <label>Discount Code</label>
            <div className="discount-input">
              <input type="text" value={discountCode} onChange={e => setDiscountCode(e.target.value)} />
              <button className="apply-button" onClick={handleDiscountApply}>Apply</button>
            </div>
            {isCodeApplied && <p className="discount-success">Success! Discount code has been applied.</p>}
          </div>
          <div className="summary">
            {isCodeApplied && (
              <div className="summary-item discount">
                <span>Discount (-20%)</span>
                <span>${(plans.find(plan => plan.name === selectedPlan).price * users * 0.2).toFixed(2)}</span>
              </div>
            )}
            <div className="summary-total">
              <span>Total</span>
              <span>${(plans.find(plan => plan.name === selectedPlan).price * users * (isCodeApplied ? 0.8 : 1)).toFixed(2)}</span>
            </div>
          </div>
          <button className="proceed-payment-button">Proceed Payment</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
