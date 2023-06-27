import React from "react";

const UserData = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        const { id, name, email } = user;
        const { street, city, zipcode } = user.address;
        return (
          <tr id={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{city}</td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
