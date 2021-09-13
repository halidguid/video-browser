import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import VideoList from "./VideoList";

export default function VideoBrowser() {
  const [word, setWord] = useState("happy");

  return (
    <div>
      <Header />
      <Search setWord={setWord} />
      <VideoList word={word} setWord={setWord} />
    </div>
  );
}
