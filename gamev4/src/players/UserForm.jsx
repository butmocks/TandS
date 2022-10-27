import React from 'react';

const UserForm = ({ userData, handleChange }) => {

  return (
    <form className="user-form">
      <input
        type="text"
        name="guyName"
        className="user-form__input"
        value={userData.guyName}
        onChange={handleChange}
      />
      <input
        value={userData.girlName}
        type="text"
        name="girlName"
        className="user-form__input"

        onChange={handleChange}
      />
    </form>
  );
};

export default UserForm;
