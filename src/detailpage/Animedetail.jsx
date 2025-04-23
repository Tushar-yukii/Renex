import { all } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Animedetail = () => {
  const [anime, setAnime] = useState([]);

  const { id } = useParams();

  const fetch = async () => {
    const data = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${id}&limit=1`
    );
    setAnime(data.data.data);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="para">
      {anime.map((all) => (
        <div className="carddetail" key={all.mal_id}>
          <div className="cardimage">
            <img src={all.images.jpg.image_url} alt="" />
          </div>
          <h1>{all.title}</h1>
          <p>{all.synopsis}</p>
        </div>
      ))}
    </div>
  );
};

export default Animedetail;
