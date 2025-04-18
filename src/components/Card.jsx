import React from "react";

const Card = ({ all }) => {
  return (
    <>
      <img src={all.images.jpg.small_image_url} alt="" />
      <h1>{all.title}</h1>
    </>
  );
};

export default Card;
