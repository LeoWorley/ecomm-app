import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { theme } from '../theme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container component="main" maxWidth="lg">
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
