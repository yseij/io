import React from "react";

const UserDetail = (props) => {
  var item = props.location.state;

  return (
    <div>
      <h2>
        Persoon: {item.name.first} {item.name.last}
      </h2>
      <p>
        <img src={item.picture.medium} alt="Persoon" style={{ width: "15%" }} />
      </p>
      <p>
        Hier onder zie je de gegevens over {item.name.first} {item.name.last}:{" "}
      </p>
      <ul>
        <li>Geslacht: {item.gender}</li>
        <li>Email: {item.email}</li>
        <li>Telefoonnummer: {item.phone}</li>
        <li>
          Woonplaats:
          <ul>
            <li>Land: {item.location.country}</li>
            <li>Staat: {item.location.state}</li>
            <li>Stad: {item.location.city}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default UserDetail;
