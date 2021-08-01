import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { name, age, status } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const updateAge = (age) => {
    dispatch({ type: "UPDATE_AGE", payload: age });
  };
  return (
    <div>
      <h1>name is {name}</h1>
      <h1>age is {age}</h1>
      <h1>status is {status}</h1>
      <button onClick={() => updateAge(40)}>Update Age</button>
    </div>
  );
};

export default Profile;
