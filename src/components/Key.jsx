/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

function Key({
  scaleNotesKey,
  note,
  chordNotes,
  scaleNotes,
  chordNotesKey,
  soundFiles,
}) {
  //scale  
  const isNoteInScale = scaleNotesKey.includes(note);
  const enharmonicNote = enharmonicConversionKey(note);
  const isEnharmonicInScale = enharmonicNote && scaleNotesKey.includes(enharmonicNote);
  const isInScale = isNoteInScale || isEnharmonicInScale;

    //chord
    function getProcessedNote (note) {
        return note.replace(/\d+$/, '');
      };


  const isNoteInBaseScale = scaleNotes.includes(note.length > 2 ? note.slice(0, 2) : note[0] );
  const isEnharmonicInBaseScale = scaleNotes.includes(getProcessedNote(enharmonicConversionKey(note)))
  const isInChord = chordNotesKey.includes(note);
  const displayNoteBool = (isNoteInBaseScale || isEnharmonicInBaseScale) && isInChord;

  const getColor = () => {
    if (isInChord) {
      return displayNoteBool ? "#7cc96b" : "#62a4d7";
    }
    return isInScale ? "#fd5b5b" : note.length > 2 ? "black" : "white";
  };

  function enharmonicConversionKey(convertedNotes) {
    const conversionMap = {
      db0: "c#0",
      "c#0": "db0",
      eb0: "d#0",
      "d#0": "eb0",
      gb0: "f#0",
      "f#0": "gb0",
      ab0: "g#0",
      "g#0": "ab0",
      bb0: "a#0",
      "a#0": "bb0",
      c0: "dbb0",
      dbb0: "c0",
      d0: "ebb0",
      ebb0: "d0",
      fb0: "e0",
      e0: "fb0",
      g0: "abb0",
      abb0: "g0",
      a0: "bbb0",
      bbb0: "a0",
      f0: "e#0",
      "e#0": "f0",
      cb0: "b0",
      b0: "cb0",
      db1: "c#1",
      "c#1": "db1",
      eb1: "d#1",
      "d#1": "eb1",
      gb1: "f#1",
      "f#1": "gb1",
      ab1: "g#1",
      "g#1": "ab1",
      bb1: "a#1",
      "a#1": "bb1",
      c1: "dbb1",
      dbb1: "c1",
      d1: "ebb1",
      ebb1: "d1",
      fb1: "e1",
      e1: "fb1",
      g1: "abb1",
      abb1: "g1",
      a1: "bbb1",
      bbb1: "a1",
      f1: "e#1",
      "e#1": "f1",
      cb1: "b1",
      b1: "cb1",
    };

    return conversionMap[convertedNotes] || null;
  }

  function onClickHandler(params) {
    const audioFile = soundFiles[params];
    if (audioFile) {
      const audio = new Audio(audioFile);
      audio.volume = 0.33;
      audio.play();
    } else {
      console.error("No sound found for params:", params);
    }
  }

  const buttonStyles = {
    borderColor: "black",
    borderWidth: 1,
    height: note.length > 2 ? 200 : 300,
    width: note.length > 2 ? 10 : 60,
    color: note.length > 2 ? "black" : "white",
    background: getColor(),
    minWidth: 10,
    minHeight: note.length > 2 ? 200 : 300,
    marginRight: note.length > 2 ? -2.1 : 0,
    marginLeft: note.length > 2 ? -2.1 : 0,
    zIndex: note.length > 2 ? 2 : 1,
    "&:hover": {
      backgroundColor: isInScale
        ? "#ffa5a5"
        : note.length > 2
        ? "#353535"
        : "#d8d8d8",
      borderColor: "black",
      color: isInScale ? "black" : note.length > 2 ? "#d8d8d8" : "#353535",
    },
  };

  return (
    <Button
      sx={buttonStyles}
      variant="outlined"
      onClick={() => onClickHandler(note)}
    ></Button>
  );
}

export default Key;
