import * as React from 'react';
import { Button, Grid2 } from '@mui/material';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ChordMaker from './ChordMaker';

const ScaleContainer = styled(TableContainer)({
    maxHeight: 440,
});

function ChordResult({setBase, setChord}) {
    const scales = [
        'Major', 'Minor', 'Diminished', 'Major Seventh', 'Minor Seventh',
        'Dominant Seventh', 'Suspended Second', 'Suspended Fourth', 'Augmented',
        'Major Ninth', 'Minor Ninth', 'Dominant Ninth', 'Major Eleventh',
        'Minor Eleventh', 'Dominant Eleventh', 'Major Thirteenth',
        'Minor Thirteenth', 'Dominant Thirteenth'
    ];

    const scalePoints = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'];

    function clickHandler(rowIndex, colIndex) {
        setBase(scalePoints[rowIndex].split('')[0].toLowerCase());
        setChord(scales[colIndex].toLowerCase());
    }

    return (
        <Grid2 container>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <ScaleContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {scales.map((scale, index) => (
                                    <TableCell key={index}
                                        style={{ minWidth: 80 }}
                                    >
                                        {scale} Chord
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {scalePoints.map((point, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {scales.map((scale, colIndex) => (
                                        <TableCell key={colIndex}>
                                            <Button
                                                variant="text"
                                                size="small"
                                                style={{ display: 'block', margin: '2px 0', color: 'black', textTransform: 'none' }}
                                                onClick={() => clickHandler(rowIndex, colIndex)}
                                            >
                                                {point}
                                            </Button>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScaleContainer>
            </Paper>
        </Grid2>
    );
}

export default ChordResult;