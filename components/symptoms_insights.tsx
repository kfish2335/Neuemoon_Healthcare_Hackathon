import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

interface props {
    id: number;
    title: string;
    info: string;
    normal_range: string;
    isGood: boolean;
}

export default function symptoms(prop: props) {
  return (
    <Stack direction="row" spacing={2} sx={{ border: '1px solid black', width: '160px', height: '145px', padding: '5px', borderRadius: '10%'}}>
      <Stack direction="column" >
        <Typography variant = 'caption' sx={{padding: '0', height: '35px'}}>
            {prop.title}
        </Typography>
        <Typography variant = 'h5' sx={{ height: '75px', textAlign: 'center'}}>
            {prop.info}
        </Typography>
        
        <Typography variant = 'caption'>
            Normal range:
        </Typography>
        <Typography variant = 'caption'>
            {prop.normal_range}
        </Typography>
      </Stack>
      {prop.isGood ? <ReportProblemIcon sx={{padding: '0', transform: 'scale(1.5)', borderRadius: '100%'} }/>:<CheckCircleRoundedIcon sx={{padding: '0', transform: 'scale(1.5)', borderRadius: '100%'} }/>}
    </Stack>
  );
}