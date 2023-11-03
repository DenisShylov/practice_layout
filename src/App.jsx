import { Container } from '@mui/material';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import TargetAudience from './Components/TargetAudience/TargetAudience';
import BetaTest from './Components/BetaTest/BetaTest';

function App() {
  return (
    <>
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
          gap: { xs: '36px', sm: '36px', md: '56px', lg: '56px', xl: '56px' },
        }}
      >
        <About />
        <TargetAudience />
        <BetaTest />
      </Container>
    </>
  );
}

export default App;
