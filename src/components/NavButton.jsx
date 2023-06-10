import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function NavButton() {
  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Test 1</Button>
    </Box>
  );
}