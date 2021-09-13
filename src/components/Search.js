import React, { useState } from "react";

export default function Search({ setWord }) {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const clickHandler = (e) => {
    if (input === "") return alert("Please enter text..");
    setWord(input);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") clickHandler();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={changeHandler}
        onKeyDown={enterHandler}
      ></input>
      <button type="button" onClick={clickHandler}></button>
    </div>
  );
}
