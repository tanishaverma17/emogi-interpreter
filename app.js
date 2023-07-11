import React, { useState } from "react";
import "./styles.css";

const emogiDictionary = {
  "🤧": "disgust face",
  "😀": "grining face",
  "😉": "winking face",
  "😴": "slepping face"
};

var emogiWeKnow = Object.keys(emogiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emogiInputHandler(event) {
    var emogi = event.target.value;
    var meaning = emogiDictionary[emogi];
    if (meaning === undefined) {
      meaning = "we don't have it in our database!!";
    }
    setMeaning(meaning);
  }

  function emogiClickHandler(emogi) {
    var meaning = emogiDictionary[emogi];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside out</h1>
      <input onChange={emogiInputHandler} />
      <h2> meaning: {meaning} </h2>
      <h3> Emogis we Know</h3>
      {emogiWeKnow.map(function (emogi) {
        return (
          <span
            onClick={() => emogiClickHandler(emogi)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emogi}
          >
            {emogi}
          </span>
        );
      })}
    </div>
    //this is jsx
  );
}

// insted of class it uses className
// instead of using - we use camel case in keys and variable
//style takes object

//viser --> view-> interact->  state in event handler
//reder
