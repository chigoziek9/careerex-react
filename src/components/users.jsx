import React, { useEffect, useState } from "react";

function RandomUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);

  if (users.length === 0)
    return (
      <p className="flex justify-center items-center h-screen text-4xl font-bold ">
        Loading...
      </p>
    );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {users.map((user, index) => (
        <div key={index}>
          <img src={user.picture.large} alt="User" />
          <ul className="ml-4 text-xl">
            <li>
              NAME: {user.name.first} {user.name.last}{" "}
            </li>
            <li>CITY: {user.location?.city}</li>
            <li>EMAIL: {user.email}</li>
            <li>
              DATE OF BIRTH:{" "}
              {user.dob?.date && new Date(user.dob.date).toLocaleDateString()}
            </li>
            <li>PHONE NUMBER: {user.phone}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RandomUser;
