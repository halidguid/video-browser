import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

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
      <Input
      style={{marginTop: "25px", width:"37%"}}
        type="text"
        placeholder="Search..."
        onChange={changeHandler}
        onKeyDown={enterHandler}
      ></Input>
      <Button type="button" onClick={clickHandler}>
        <i className="fa fa-search"></i>
      </Button>
    </div>
  );
}
