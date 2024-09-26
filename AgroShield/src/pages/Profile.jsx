import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    mobileNumber: '',
    location: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you can add code to save the profile data, e.g., send it to a server
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='content ml-[20%] mt-[12vh]'>
        <div className='text-[4.5vh] text-bold'>
          Profile
        </div>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type='text'
                name='name'
                value={profile.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Mobile Number:</label>
              <input
                type='text'
                name='mobileNumber'
                value={profile.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Location:</label>
              <input
                type='text'
                name='location'
                value={profile.location}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type='email'
                name='email'
                value={profile.email}
                onChange={handleChange}
              />
            </div>
            <button type='submit'>Save</button>
          </form>
        ) : (
          <div>
            <div>Name: {profile.name}</div>
            <div>Mobile Number: {profile.mobileNumber}</div>
            <div>Location: {profile.location}</div>
            <div>Email: {profile.email}</div>
          </div>
        )}
        <button onClick={handleEditToggle}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>
    </>
  );
}

export default Profile;