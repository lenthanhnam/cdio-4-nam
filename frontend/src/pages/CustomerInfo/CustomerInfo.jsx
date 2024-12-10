import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CustomerInfo.css';

const CustomerInfo = () => {
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [addressError, setAddressError] = useState(''); // Thông báo lỗi cho Address

  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error("Error decoding token", e);
      return null;
    }
  };

  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = parseJwt(token);
      return decodedToken ? decodedToken.id : null;
    }
    return null;
  };

  const userId = getUserIdFromToken();

  useEffect(() => {
    if (!userId) {
      setError('User not authenticated.');
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/user/${userId}`);
        if (response.data.success) {
          setCustomerData(response.data.data);
        } else {
          setError('Failed to fetch user data.');
        }
      } catch (err) {
        console.error(err);
        setError('An error occurred while fetching user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFirstNameError('');
    setLastNameError('');
    setAddressError('');

    let isValid = true;

    // Kiểm tra firstName
    const namePattern = /^[A-Za-z ]+$/;
    if (!namePattern.test(customerData.firstName)) {
      setFirstNameError('First Name must only contain letters and spaces.');
      isValid = false;
    }
    if (customerData.firstName.length > 20) {
      setFirstNameError('First Name must not exceed 20 characters.');
      isValid = false;
    }

    // Kiểm tra lastName
    if (!namePattern.test(customerData.lastName)) {
      setLastNameError('Last Name must only contain letters and spaces.');
      isValid = false;
    }
    if (customerData.lastName.length > 20) {
      setLastNameError('Last Name must not exceed 20 characters.');
      isValid = false;
    }

    // Kiểm tra Address (chỉ chứa chữ cái, số và khoảng trắng)
    const invalidChars = /[^a-zA-Z0-9\s]/g;
    if (invalidChars.test(customerData.address)) {
      setAddressError('Address must only contain letters, numbers, and spaces.');
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await axios.put(`http://localhost:4000/api/user/update/${userId}`, customerData);
      if (response.data.success) {
        alert('Customer information updated successfully!');
      } else {
        alert('Failed to update customer information.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while updating the customer information.');
    }
  };

  if (loading) {
    return <p>Loading user data...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="customer-info">
      <h1>Customer Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={customerData.firstName}
            onChange={handleChange}
            required
            maxLength={20}
          />
          {firstNameError && <p className="error">{firstNameError}</p>}
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={customerData.lastName}
            onChange={handleChange}
            required
            maxLength={20}
          />
          {lastNameError && <p className="error">{lastNameError}</p>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={customerData.email}
            disabled={true}
            required
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={customerData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            title="Phone number must be 10 digits"
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={customerData.address}
            onChange={handleChange}
            required
          />
          {addressError && <p className="error">{addressError}</p>}
        </label>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default CustomerInfo;
