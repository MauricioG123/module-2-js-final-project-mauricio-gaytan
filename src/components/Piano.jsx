/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../css/Piano.css";
import Key from "./Key";

function Piano({
  scaleNotes,
  chordNotes,
  enharmonicConversion,
  chordNotesKey,
}) {
  const notes = [
    "c0",
    "c#0",
    "d0",
    "d#0",
    "e0",
    "f0",
    "f#0",
    "g0",
    "g#0",
    "a0",
    "a#0",
    "b0",
    "c1",
    "c#1",
    "d1",
    "d#1",
    "e1",
    "f1",
    "f#1",
    "g1",
    "g#1",
    "a1",
    "a#1",
    "b1",
  ];

  const noteCompare = [
    "c",
    "d",
    "e",
    "f",
    "g",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "a",
    "b",
  ];

  const scaleNotesKey = [];

  function displayScaleCorrectOrder() {
    for (let i = 0; i < scaleNotes.length; i++) {
      let note = scaleNotes[i];
      let notePrefix = note[0];
      let secondChar = note[1];
      let thirdChar = note[2];

      let modifyNote =
        noteCompare.indexOf(notePrefix) < noteCompare.indexOf(scaleNotes[0][0]);
      let validSecondChar = secondChar === "0" || secondChar === "1";
      let validThirdChar = thirdChar === "0" || thirdChar === "1";

      if (modifyNote) {
        if (!validSecondChar && !validThirdChar) {
          scaleNotesKey[i] = note + "1";
        } else {
          return;
        }
      } else {
        if (!validSecondChar && !validThirdChar) {
          scaleNotesKey[i] = note + "0";
        } else {
          return;
        }
      }
    }
  }

  displayScaleCorrectOrder();

  return (
    <div className="piano">
      {notes.map((note, index) => (
        <Key
          key={`${note}-${index}`}
          scaleNotesKey={scaleNotesKey}
          note={note}
          notes={notes}
          enharmonicConversion={enharmonicConversion}
          chordNotes={chordNotes}
          chordNotesKey={chordNotesKey}
          scaleNotes={scaleNotes}
        />
      ))}
    </div>
  );
}

export default Piano;
