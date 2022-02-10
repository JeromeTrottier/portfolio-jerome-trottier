import './sass/components/App.scss';
import './sass/layout/_layouts.scss';
import Entete from './Entete';
import SidebareWave from './SidebarWave';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Entete/>
      <Navigation/>
      <Main/>
      <Footer/>
      <SidebareWave/>
    </div>
  );
}

export default App;
