import React, { useEffect, useState } from "react";
import axios from "axios";
import { data, useParams } from "react-router-dom";
import Card from "./Card";
const Fetchapi = () => {
  const [anime, setAnime] = useState([]);

  const { id } = useParams();

  const fetch = async () => {
    const data = await axios.get(
      `https://api.jikan.moe/v4/top/${id ? id : "anime"}`
    );
    setAnime(data.data.data);
  };

  useEffect(() => {
    fetch();
  }, [id]);
  return (
    <div className="cards">
      {anime?.map((anime) => (
        <Card all={anime} key={anime.mal_id} />
      ))}
      {console.log(anime)}
    </div>
  );
};

export default Fetchapi;
