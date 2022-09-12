import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function ColorButtons( prop: string) {
    const [on, seton] = useState(false);
    return (

      <Button variant={on ? "contained":"outlined"} color="inherit" onClick={() => {seton(!on);}} style = {{width: '100%', height: '100%'}}>
        {prop}
      </Button>
  );
}