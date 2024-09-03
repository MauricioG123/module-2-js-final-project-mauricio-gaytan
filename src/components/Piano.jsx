/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import "../css/Piano.css";
import Key from "./Key";
import c0 from "../sounds/c0.wav";
import cSharp0 from "../sounds/csharp0.wav";
import d0 from "../sounds/d0.wav";
import dSharp0 from "../sounds/dsharp0.wav";
import e0 from "../sounds/e0.wav";
import f0 from "../sounds/f0.wav";
import fSharp0 from "../sounds/fsharp0.wav";
import g0 from "../sounds/g0.wav";
import gSharp0 from "../sounds/gsharp0.wav";
import a0 from "../sounds/a0.wav";
import aSharp0 from "../sounds/asharp0.wav";
import b0 from "../sounds/b0.wav";
import c1 from "../sounds/c1.wav";
import cSharp1 from "../sounds/csharp1.wav";
import d1 from "../sounds/d1.wav";
import dSharp1 from "../sounds/dsharp1.wav";
import e1 from "../sounds/e1.wav";
import f1 from "../sounds/f1.wav";
import fSharp1 from "../sounds/fsharp1.wav";
import g1 from "../sounds/g1.wav";
import gSharp1 from "../sounds/gsharp1.wav";
import a1 from "../sounds/a1.wav";
import aSharp1 from "../sounds/asharp1.wav";
import b1 from "../sounds/b1.wav";
import { useEffect } from "react";

function Piano({
  scaleNotes,
  chordNotes,
  enharmonicConversion,
  chordNotesKey,
  clicked
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

  const soundFiles = {
    c0: c0,
    "c#0": cSharp0,
    d0: d0,
    "d#0": dSharp0,
    e0: e0,
    f0: f0,
    "f#0": fSharp0,
    g0: g0,
    "g#0": gSharp0,
    a0: a0,
    "a#0": aSharp0,
    b0: b0,
    c1: c1,
    "c#1": cSharp1,
    d1: d1,
    "d#1": dSharp1,
    e1: e1,
    f1: f1,
    "f#1": fSharp1,
    g1: g1,
    "g#1": gSharp1,
    a1: a1,
    "a#1": aSharp1,
    b1: b1,
  };

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

  function chordPlayer(params) {
    if (Array.isArray(params)) {
        params.forEach(note => {
          const audioFile = soundFiles[note];
          if (audioFile) {
            const audio = new Audio(audioFile);
            audio.volume = 0.25;
            audio.play();
          }
        });
      }
  }

  useEffect(() => {
    chordPlayer(chordNotesKey);
  }, [clicked]);

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
          soundFiles={soundFiles}
        />
      ))}
    </div>
  );
}

export default Piano;
