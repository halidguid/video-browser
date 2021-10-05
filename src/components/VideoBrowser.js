import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import VideoList from "./VideoList";

export default function VideoBrowser() {
  const [word, setWord] = useState("Mile Kitic i Semsa Suljakovic - Grand duel - (Tv Pink 2003) ");

  return (
    <div > 
      <Header />
      <Search setWord={setWord} />
      <VideoList word={word} setWord={setWord} />
    </div>
  );
}
