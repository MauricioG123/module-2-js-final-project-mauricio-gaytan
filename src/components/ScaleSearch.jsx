import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


function ScaleSearch({ scale, setScale }) {

    const scales = [
        // Major Scales
        'A Major Scale',
        'Bb Major Scale',
        'B Major Scale',
        'C Major Scale',
        'Db Major Scale',
        'D Major Scale',
        'Eb Major Scale',
        'E Major Scale',
        'F Major Scale',
        'F# Major Scale',
        'G Major Scale',
        'Ab Major Scale',

        // Minor Scales
        'A Minor Scale',
        'Bb Minor Scale',
        'B Minor Scale',
        'C Minor Scale',
        'C# Minor Scale',
        'D Minor Scale',
        'D# Minor Scale',
        'E Minor Scale',
        'F Minor Scale',
        'F# Minor Scale',
        'G Minor Scale',
        'G# Minor Scale',

        // Harmonic Minor Scales
        'A Harmonic Minor Scale',
        'Bb Harmonic Minor Scale',
        'B Harmonic Minor Scale',
        'C Harmonic Minor Scale',
        'C# Harmonic Minor Scale',
        'D Harmonic Minor Scale',
        'D# Harmonic Minor Scale',
        'E Harmonic Minor Scale',
        'F Harmonic Minor Scale',
        'F# Harmonic Minor Scale',
        'G Harmonic Minor Scale',
        'G# Harmonic Minor Scale',

        // Modes
        'A Ionian',
        'Bb Ionian',
        'B Ionian',
        'C Ionian',
        'Db Ionian',
        'D Ionian',
        'Eb Ionian',
        'E Ionian',
        'F Ionian',
        'F# Ionian',
        'G Ionian',
        'Ab Ionian',

        'A Dorian',
        'Bb Dorian',
        'B Dorian',
        'C Dorian',
        'C# Dorian',
        'D Dorian',
        'Eb Dorian',
        'E Dorian',
        'F Dorian',
        'F# Dorian',
        'G Dorian',
        'G# Dorian',

        'A Phrygian',
        'A# Phrygian',
        'B Phrygian',
        'C Phrygian',
        'C# Phrygian',
        'D Phrygian',
        'D# Phrygian',
        'E Phrygian',
        'F Phrygian',
        'F# Phrygian',
        'G Phrygian',
        'G# Phrygian',

        'A Lydian',
        'Bb Lydian',
        'B Lydian',
        'C Lydian',
        'Db Lydian',
        'D Lydian',
        'Eb Lydian',
        'E Lydian',
        'F Lydian',
        'Gb Lydian',
        'G Lydian',
        'Ab Lydian',

        'A Mixolydian',
        'Bb Mixolydian',
        'B Mixolydian',
        'C Mixolydian',
        'C# Mixolydian',
        'D Mixolydian',
        'Eb Mixolydian',
        'E Mixolydian',
        'F Mixolydian',
        'F# Mixolydian',
        'G Mixolydian',
        'Ab Mixolydian',

        'A Aeolian',
        'Bb Aeolian',
        'B Aeolian',
        'C Aeolian',
        'C# Aeolian',
        'D Aeolian',
        'D# Aeolian',
        'E Aeolian',
        'F Aeolian',
        'F# Aeolian',
        'G Aeolian',
        'G# Aeolian',

        'A Locrian',
        'A# Locrian',
        'B Locrian',
        'C Locrian',
        'C# Locrian',
        'D Locrian',
        'D# Locrian',
        'E Locrian',
        'F Locrian',
        'F# Locrian',
        'G Locrian',
        'G# Locrian',

        // Pentatonic Scales
        'A Major Pentatonic Scale',
        'Bb Major Pentatonic Scale',
        'B Major Pentatonic Scale',
        'C Major Pentatonic Scale',
        'Db Major Pentatonic Scale',
        'D Major Pentatonic Scale',
        'Eb Major Pentatonic Scale',
        'E Major Pentatonic Scale',
        'F Major Pentatonic Scale',
        'F# Major Pentatonic Scale',
        'G Major Pentatonic Scale',
        'Ab Major Pentatonic Scale',

        'A Minor Pentatonic Scale',
        'Bb Minor Pentatonic Scale',
        'B Minor Pentatonic Scale',
        'C Minor Pentatonic Scale',
        'C# Minor Pentatonic Scale',
        'D Minor Pentatonic Scale',
        'D# Minor Pentatonic Scale',
        'E Minor Pentatonic Scale',
        'F Minor Pentatonic Scale',
        'F# Minor Pentatonic Scale',
        'G Minor Pentatonic Scale',
        'G# Minor Pentatonic Scale',

        // Blues Scales
        'A Major Blues Scale',
        'Bb Major Blues Scale',
        'B Major Blues Scale',
        'C Major Blues Scale',
        'Db Major Blues Scale',
        'D Major Blues Scale',
        'Eb Major Blues Scale',
        'E Major Blues Scale',
        'F Major Blues Scale',
        'F# Major Blues Scale',
        'G Major Blues Scale',
        'Ab Major Blues Scale',

        'A Minor Blues Scale',
        'Bb Minor Blues Scale',
        'B Minor Blues Scale',
        'C Minor Blues Scale',
        'C# Minor Blues Scale',
        'D Minor Blues Scale',
        'D# Minor Blues Scale',
        'E Minor Blues Scale',
        'F Minor Blues Scale',
        'F# Minor Blues Scale',
        'G Minor Blues Scale',
        'G# Minor Blues Scale',

        // Diminished Scales
        'A Diminished W-H Scale',
        'Bb Diminished W-H Scale',
        'B Diminished W-H Scale',
        'C Diminished W-H Scale',
        'Db Diminished W-H Scale',
        'D Diminished W-H Scale',
        'Eb Diminished W-H Scale',
        'E Diminished W-H Scale',
        'F Diminished W-H Scale',
        'F# Diminished W-H Scale',
        'G Diminished W-H Scale',
        'Ab Diminished W-H Scale',

        'A Diminished H-W Scale',
        'Bb Diminished H-W Scale',
        'B Diminished H-W Scale',
        'C Diminished H-W Scale',
        'Db Diminished H-W Scale',
        'D Diminished H-W Scale',
        'Eb Diminished H-W Scale',
        'E Diminished H-W Scale',
        'F Diminished H-W Scale',
        'F# Diminished H-W Scale',
        'G Diminished H-W Scale',
        'Ab Diminished H-W Scale',

        // Whole Tone Scales
        'A Whole Tone Scale',
        'Bb Whole Tone Scale',
        'B Whole Tone Scale',
        'C Whole Tone Scale',
        'Db Whole Tone Scale',
        'D Whole Tone Scale',
        'Eb Whole Tone Scale',
        'E Whole Tone Scale',
        'F Whole Tone Scale',
        'F# Whole Tone Scale',
        'G Whole Tone Scale',
        'Ab Whole Tone Scale',
    ];

    function onScaleChange(scale) {
        setScale(scale);
    }

    return (
        <Autocomplete
            disablePortal
            options={scales}
            sx={{
                width: 700,
                borderColor: 'black',
                backgroundColor: 'white',
                color: 'black',
                '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&:hover fieldset': {
                        borderColor: 'black',
                    },
                },
                '& .MuiInputLabel-root': {
                    color: 'black',
                },
                '& .MuiAutocomplete-popover': {
                    borderRadius: 16,
                },
            }}
            onChange={(event, newValue) => {
                onScaleChange(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Search for Scale" />}
        />
    )
}

export default ScaleSearch;