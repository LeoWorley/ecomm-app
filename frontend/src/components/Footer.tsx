import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer"
      sx={{ 
        mt: 4,
        py: 3,
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © 2023 Our Store. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
