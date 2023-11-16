import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(emojii) {
  return (
    <div>
      <Card
        key={emojii.id}
        emo={emojii.emoji}
        name={emojii.name}
        meaning={emojii.meaning}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
