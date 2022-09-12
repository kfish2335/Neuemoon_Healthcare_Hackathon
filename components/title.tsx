import Typography from '@mui/material/Typography';

export default function Title1(prop: string) {
    return (
        <Typography variant="h6"  component="div" sx={{ fontWeight: 'bold', paddingBottom:'20px'}}>
            {prop}
        </Typography>
    );
  }