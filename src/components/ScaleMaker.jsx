import { useEffect } from "react";

function ScaleMaker({ scale, setScaleNotes }) {

    const notes = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];
    const scaleNotes = [];

    function enharmonicConversion(scaleNote) {
        const conversionMap = {
            "db": "c#",
            "c#": "db",
            "eb": "d#",
            "d#": "eb",
            "gb": "f#",
            "f#": "gb",
            "ab": "g#",
            "g#": "ab",
            "bb": "a#",
            "a#": "bb",
            "c": "dbb",
            "dbb": "c",
            "d": "ebb",
            "ebb": "d",
            "fb": "e",
            "e": "fb",
            "g": "abb",
            "abb": "g",
            "a": "bbb",
            "bbb": "a",
            "f": "e#",
            "e#": "f",
            "cb": "b",
            "b": "cb",
        };

        return conversionMap[scaleNote] || null;
    }

    function scaleCreation(steps) {
        const trim = scale.trim();
        var scaleNote = trim.split(' ')[0];
        const selectedScaleNote = trim.split(' ')[0];
        if (!notes.includes(scaleNote)) {
            scaleNote = enharmonicConversion(scaleNote);
        }
        const base = notes.indexOf(scaleNote);
        for (let i = 0; i < steps.length; i++) {
            scaleNotes.push(notes[base + steps[i]])
        }

        fixingScale(selectedScaleNote);
        console.log(scaleNotes);
        setScaleNotes(scaleNotes);
    }

    function fixingScale(selectedScaleNote) {

        for (let i = 0; i < scaleNotes.length; i++) {
            if (i == 0) {
                if (scaleNotes[i] !== selectedScaleNote) {
                    scaleNotes[i] = enharmonicConversion(scaleNotes[i])
                }
            } else {
                if (findPreviousDuplicate(scaleNotes, scaleNotes[i], i)) {
                    scaleNotes[i] = enharmonicConversion(scaleNotes[i]);
                }
            }
        }
    }

    function findPreviousDuplicate(scaleNotes, note, index) {
        for (let j = 0; j < index; j++) {
            if (note.split('')[0] === scaleNotes[j].split('')[0]) {
                return true;
            }
        }
        return false;
    }

    function majorScale() {

        const steps = [0, 2, 4, 5, 7, 9, 11];

        scaleCreation(steps);

    }

    function naturalMinorScale() {

        const steps = [0, 2, 3, 5, 7, 8, 10];

        scaleCreation(steps);

    }

    function harmonicMinorScale() {

        const steps = [0, 2, 3, 5, 7, 8, 11];

        scaleCreation(steps);

    }

    function ionianScale() {

        const steps = [0, 2, 4, 5, 7, 9, 11];

        scaleCreation(steps);

    }

    function dorianScale() {

        const steps = [0, 2, 3, 5, 7, 9, 10];

        scaleCreation(steps);

    }

    function phrygianScale() {

        const steps = [0, 1, 3, 5, 7, 9, 10];

        scaleCreation(steps);

    }

    function lydianScale() {

        const steps = [0, 2, 4, 6, 7, 9, 11];

        scaleCreation(steps);

    }

    function mixolydianScale() {

        const steps = [0, 2, 4, 5, 7, 9, 10];

        scaleCreation(steps);

    }

    function aeolianScale() {

        const steps = [0, 2, 3, 5, 7, 8, 10];

        scaleCreation(steps);

    }

    function locrianScale() {

        const steps = [0, 1, 3, 5, 6, 8, 10];

        scaleCreation(steps);
    }

    function majorPentatonicScale() {

        const steps = [0, 2, 4, 7, 9];

        scaleCreation(steps);

    }

    function minorPentatonicScale() {

        const steps = [0, 3, 5, 7, 10];

        scaleCreation(steps);

    }

    function majorBluesScale() {

        const steps = [0, 2, 3, 4, 5, 7, 9];

        scaleCreation(steps);

    }

    function minorBluesScale() {

        const steps = [0, 3, 4, 5, 7, 10];

        scaleCreation(steps);

    }

    function wholeHalfScale() {

        const steps = [0, 2, 3, 5, 6, 8, 9, 11];

        scaleCreation(steps);

    }

    function halfWholeScale() {

        const steps = [0, 1, 3, 4, 6, 7, 9, 10];

        scaleCreation(steps);

    }

    function wholeToneScale() {

        const steps = [0, 2, 4, 6, 8, 10];

        scaleCreation(steps);

    }

    function scaleSelecter() {
        scale = scale.toLowerCase();

        if (scale.includes("major pentatonic")) {
            majorPentatonicScale();
        } else if (scale.includes("minor pentatonic")) {
            minorPentatonicScale();
        } else if (scale.includes("major blues")) {
            majorBluesScale();
        } else if (scale.includes("minor blues")) {
            minorBluesScale();
        } else if (scale.includes("major")) {
            majorScale();
        } else if (scale.includes("harmonic minor")) {
            harmonicMinorScale();
        } else if (scale.includes("minor")) {
            naturalMinorScale();
        } else if (scale.includes("ionian")) {
            ionianScale();
        } else if (scale.includes("dorian")) {
            dorianScale();
        } else if (scale.includes("phrygian")) {
            phrygianScale();
        } else if (scale.includes("mixolydian")) {
            mixolydianScale();
        } else if (scale.includes("lydian")) {
            lydianScale();
        } else if (scale.includes("aeolian")) {
            aeolianScale();
        } else if (scale.includes("locrian")) {
            locrianScale();
        } else if (scale.includes("diminished w-h")) {
            wholeHalfScale();
        } else if (scale.includes("diminished h-w")) {
            halfWholeScale();
        } else if (scale.includes("whole tone")) {
            wholeToneScale();
        } else {
            console.log("No matching scale found.");
        }
    }

    useEffect(() => {
        scaleSelecter();
    }, [scale])

    return (
        <>
        </>
    )
}

export default ScaleMaker;