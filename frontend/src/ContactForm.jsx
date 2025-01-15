import { useState } from 'react';

const ContactForm = ({}) => {
  // Add the states for the variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState();

  const onSubmit = async (e) => {
    e.preventDefault()

    // Define the data
    const data = {
      firstName,
      lastName,
      email
    }
    // Define the URL
    const url = 'http://127.0.0.1:5000/create_contact'

    // Set options for the request
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    // Set the request
    const response = await fetch(url, options)

    // Check if the request was successful and handle both scenario
    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json()
      alert(data.message)
    } else {
      // Successful
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor='firstName'>First Name:</label>
        <input
          type='text'
          id='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          id='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type='submit'>Create Contact</button>
    </form>
  );
};

export default ContactForm;
