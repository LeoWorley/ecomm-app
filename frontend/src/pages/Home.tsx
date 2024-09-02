import React from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h4" component="h2" gutterBottom>
        Featured Products
      </Typography>
      {/* Add your main content here */}
    </Layout>
  );
};

export default Home;
