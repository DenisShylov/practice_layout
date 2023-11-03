import { Container, Box } from '@mui/material';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import TargetAudience from './Components/TargetAudience/TargetAudience';
import BetaTest from './Components/BetaTest/BetaTest';
import StartExploring from './Components/StartExploring/StartExploring';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Box sx={{ width: '100%' }}>
      <Header />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: {
            xs: '100px',
            sm: '100px',
            md: '140px',
            lg: '160px',
            xl: '160px',
          },
          // gap: { xs: '36px', sm: '36px', md: '56px', lg: '56px', xl: '56px' },
        }}
      >
        <About />
        <TargetAudience />
        <BetaTest />
        <StartExploring />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
