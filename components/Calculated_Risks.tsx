import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import title1 from '../components/title';
import Grid from '@mui/material/Grid';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import BlockIcon from '@mui/icons-material/Block';


interface props { 
    id: number,
    title: string,
    info: string,
    risk_percentage: string,
    risk_info: string,
    symptoms: string[],
    isGood: boolean,
}
export default function risk(prop: props) {
  return (
    <Stack direction = 'row'>
      <Paper elevation={3} sx ={prop.isGood ? { width: '100px', height: '100px', display: 'flex',  alignItems: 'center', justifyContent: 'center', backgroundColor:'lightgreen', border: '1px solid green', marginRight: '10px'}: { width: '100px', height: '100px', display: 'flex',  alignItems: 'center', justifyContent: 'center', backgroundColor:'#a64452', border: '1px solid red', marginRight: '10px'}}>
        <Typography variant="h6"  component="div" sx={{ fontWeight: 'bold', paddingBottom:'20px', width:'fit-content', textAlign: 'center', padding: 'auto' }}>
                {prop.risk_percentage}
            </Typography>
            </Paper>
            <Stack direction = 'column'>
                {title1(prop.title)}
                <Typography variant="body1"  component="div">
                Compared to patients who exhibit similar symptoms, this patients is:
                </Typography>
                <Typography variant="body1"  component="div" sx={{ fontWeight: 'bold', paddingBottom:'20px'}}>
                {prop.risk_info}
                </Typography>
                <Grid container spacing={2}>
                {prop.symptoms.map((option) => (
                <Grid key={prop.id}item xs={4}>
                    <Typography variant="body1"  component="div">
                        {prop.isGood?<BlockIcon />:<CheckCircleRoundedIcon />} {option}
                    </Typography>
                </Grid>
                ))}
                </Grid>
                        </Stack>
    </Stack>
  );
}