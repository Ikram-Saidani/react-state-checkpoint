import React from "react";

function Profile({ person }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px" }}>{person.fullName}</h1>
      <p
        style={{
          color: "red",
          fontSize: "20px",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        {person.bio}
      </p>
      <img
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        src={person.imgSrc}
        alt={person.fullName}
      />
      <p
        style={{
          textTransform: "uppercase",
          fontSize: "20px",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        {person.profession}
      </p>
    </div>
  );
}

export default Profile;
