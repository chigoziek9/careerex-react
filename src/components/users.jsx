import React, { useEffect, useState } from "react";

function RandomUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        setUser(data.results[0]);
      });
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <img src={user.picture.large} alt="User" />
      <ul>
        <li>NAME: {user.name.first} {user.name.last} </li>
        <li>CITY: {user.location?.city && `, ${user.location.city}`} </li>
        <li>EMAIL: {user.email}</li>
        <li>DATE OF BIRTH: {user.dob?.date && `, ${new Date(user.dob.date).toLocaleDateString()}`}</li>
        <li>PHONE NUMBER: {user.phone}</li>
      </ul>
      
    </div>
  );
}

export default RandomUser;
