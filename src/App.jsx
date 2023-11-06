import About from './Components/About/About';
import Header from './Components/Header/Header';
import TargetAudience from './Components/TargetAudience/TargetAudience';
import BetaTest from './Components/BetaTest/BetaTest';
import StartExploring from './Components/StartExploring/StartExploring';
import Footer from './Components/Footer/Footer';
import { Root } from './Shared/Root';

function App() {
  return (
    <>
      <Header />
      <Root>
        <About />
        <TargetAudience />
        <BetaTest />
        <StartExploring />
      </Root>
      <Footer />
    </>
  );
}

export default App;
