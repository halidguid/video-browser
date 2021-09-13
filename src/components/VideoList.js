import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoItem from "./VideoItem";

const KEY = process.env.REACT_APP_API_KEY;

export default function VideoList({ word, setWord }) {
  const [data, setData] = useState([]);
  const [pictues, setPicutres] = useState([]);
  const [tittles, setTittles] = useState([]);
  const [description, setDescription] = useState([]);

  var URL =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" +
    KEY +
    "&type=video&q=" +
    word +
    "&maxResults=5";

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response);

        let urls = response.data.items.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
        );

        setData(urls);

        let newTittles = response.data.items.map((obj) => obj.snippet.title);
        setTittles(newTittles);

        let newDescription = response.data.items.map(
          (obj) => obj.snippet.description
        );
        setDescription(newDescription);

        let newThumbnails = response.data.items.map(
          (obj) => obj.snippet.thumbnails.medium.url
        );
        setPicutres(newThumbnails);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [word]);

  const onClick = (tit) => {
    setWord(tit);
  };

  return (
    <div>
      {data.map((url, i) => {
        return (
          <VideoItem
            key={i}
            url={url}
            tit={tittles[i]}
            desc={description[i]}
            img={pictues[i]}
            counter={i}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}
