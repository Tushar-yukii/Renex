import React, { useEffect, useState } from "react";
import axios from "axios";
// import { data } from "react-router-dom";
import Card from "./Card";
const Fetchapi = () => {
  const [anime, setAnime] = useState([]);

  const fetch = async () => {
    const data = await axios.get(
      "https://api.jikan.moe/v4/top/anime?sfw"
    );
    setAnime(data.data.data);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      {anime?.map((naruto) => {
        <Card all={naruto} />
      })}
      {console.log(anime)};
    </div>
  );
};

export default Fetchapi;
