/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

function ChordMaker({
  chord,
  base,
  scaleNotes,
  setChordNotes,
  setChordNotesKey,
}) {
  const notes = [
    "c",
    "c#",
    "d",
    "d#",
    "e",
    "f",
    "f#",
    "g",
    "g#",
    "a",
    "a#",
    "b",
    "c",
    "c#",
    "d",
    "d#",
    "e",
    "f",
    "f#",
    "g",
    "g#",
    "a",
    "a#",
    "b",
  ];

  const chordNotesKey = [];

  const chordNotes = [];

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

  function enharmonicConversion(scaleNote) {
    const conversionMap = {
      db: "c#",
      "c#": "db",
      eb: "d#",
      "d#": "eb",
      gb: "f#",
      "f#": "gb",
      ab: "g#",
      "g#": "ab",
      bb: "a#",
      "a#": "bb",
      c: "dbb",
      dbb: "c",
      d: "ebb",
      ebb: "d",
      fb: "e",
      e: "fb",
      g: "abb",
      abb: "g",
      a: "bbb",
      bbb: "a",
      f: "e#",
      "e#": "f",
      cb: "b",
      b: "cb",
    };

    return conversionMap[scaleNote] || null;
  }

  function chordCreation(steps) {
    if (scaleNotes == null) {
      console.log("No Scale Selected");
      return;
    } else {
      var root = 0;

      if (notes.includes(scaleNotes[base - 1])) {
        root = notes.indexOf(scaleNotes[base - 1]);
      } else {
        root = notes.indexOf(enharmonicConversion(scaleNotes[base - 1]));
      }

      for (let i = 0; i < steps.length; i++) {
        chordNotes.push(notes[root + steps[i]]);
      }

      displayChordCorrectOrder(chordNotes);
    }
  }

  function displayChordCorrectOrder(chordNotes) {
    var addOne = false;
    var addTwo = false;

    for (let i = 0; i < chordNotes.length; i++) {
      var comparedNote;

      if (i == 0) {
        comparedNote = chordNotes[0][0];
      } else {
        comparedNote = chordNotes[i - 1][0];
      }

      let note = chordNotes[i];
      let notePrefix = note[0];
      let secondChar = note[1];
      let thirdChar = note[2];

      let modifyNote =
        noteCompare.indexOf(notePrefix) < noteCompare.indexOf(comparedNote);
      let validSecondChar = secondChar === "0" || secondChar === "1";
      let validThirdChar = thirdChar === "0" || thirdChar === "1";

      if (modifyNote || addOne) {
        if (addTwo == true) {
          if (!validSecondChar && !validThirdChar) {
            chordNotesKey[i] = note + "2";
          }
        } else {
          if (!validSecondChar && !validThirdChar) {
            chordNotesKey[i] = note + "1";
            if (addOne == true) {
              addTwo == true;
            }
            addOne = true;
          } else {
            return;
          }
        }
      } else {
        if (!validSecondChar && !validThirdChar) {
          chordNotesKey[i] = note + "0";
        } else {
          return;
        }
      }
    }
    setChordNotes(chordNotes);
    setChordNotesKey(chordNotesKey);
  }

  function majorChord() {
    const steps = [0, 4, 7];
    chordCreation(steps);
  }

  function minorChord() {
    const steps = [0, 3, 7];
    chordCreation(steps);
  }

  function diminishedChord() {
    const steps = [0, 3, 6];
    chordCreation(steps);
  }

  function majorSeventhChord() {
    const steps = [0, 4, 7, 11];
    chordCreation(steps);
  }

  function minorSeventhChord() {
    const steps = [0, 3, 7, 10];
    chordCreation(steps);
  }

  function dominantSeventhChord() {
    const steps = [0, 4, 7, 10];
    chordCreation(steps);
  }

  function suspendedSecondChord() {
    const steps = [0, 2, 5, 7];
    chordCreation(steps);
  }

  function suspendedFourthChord() {
    const steps = [0, 5, 7];
    chordCreation(steps);
  }

  function augmentedChord() {
    const steps = [0, 4, 8];
    chordCreation(steps);
  }

  function majorNinthChord() {
    const steps = [0, 4, 7, 11, 14];
    chordCreation(steps);
  }

  function minorNinthChord() {
    const steps = [0, 3, 7, 10, 14];
    chordCreation(steps);
  }

  function dominantNinthChord() {
    const steps = [0, 4, 7, 10, 14];
    chordCreation(steps);
  }

  function majorEleventhChord() {
    const steps = [0, 4, 7, 11, 14, 17];
    chordCreation(steps);
  }

  function minorEleventhChord() {
    const steps = [0, 3, 7, 10, 14, 17];
    chordCreation(steps);
  }

  function dominantEleventhChord() {
    const steps = [0, 4, 7, 10, 14, 17];
    chordCreation(steps);
  }

  function majorThirteenthChord() {
    const steps = [0, 4, 7, 11, 14, 17, 21];
    chordCreation(steps);
  }

  function minorThirteenthChord() {
    const steps = [0, 3, 7, 10, 14, 17, 21];
    chordCreation(steps);
  }

  function dominantThirteenthChord() {
    const steps = [0, 4, 7, 10, 14, 17, 21];
    chordCreation(steps);
  }

  function chordSelecter() {
    if (chord.includes("major seventh")) {
      majorSeventhChord();
      return;
    } else if (chord.includes("minor seventh")) {
      minorSeventhChord();
      return;
    } else if (chord.includes("dominant seventh")) {
      dominantSeventhChord();
      return;
    } else if (chord.includes("suspended second")) {
      suspendedSecondChord();
      return;
    } else if (chord.includes("suspended fourth")) {
      suspendedFourthChord();
      return;
    } else if (chord.includes("augmented")) {
      augmentedChord();
      return;
    } else if (chord.includes("major ninth")) {
      majorNinthChord();
      return;
    } else if (chord.includes("minor ninth")) {
      minorNinthChord();
      return;
    } else if (chord.includes("dominant ninth")) {
      dominantNinthChord();
      return;
    } else if (chord.includes("major eleventh")) {
      majorEleventhChord();
      return;
    } else if (chord.includes("minor eleventh")) {
      minorEleventhChord();
      return;
    } else if (chord.includes("dominant eleventh")) {
      dominantEleventhChord();
      return;
    } else if (chord.includes("major thirteenth")) {
      majorThirteenthChord();
      return;
    } else if (chord.includes("minor thirteenth")) {
      minorThirteenthChord();
      return;
    } else if (chord.includes("dominant thirteenth")) {
      dominantThirteenthChord();
      return;
    } else if (chord.includes("diminished")) {
      diminishedChord();
      return;
    }
    if (chord.includes("major")) {
      majorChord();
      return;
    } else if (chord.includes("minor")) {
      minorChord();
      return;
    } else {
      console.log("No matching chord found.");
    }
  }

  useEffect(() => {
    if (scaleNotes.length !== 0) {
      chordSelecter();
    } else {
      console.log("No Scale Selected");
    }
  }, [chord, base]);

  return <></>;
}

export default ChordMaker;
