import './sass/components/App.scss';
import './sass/layout/_layouts.scss';
import Entete from './Entete';
import SidebarWave from './SidebarWave';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';
import Presentation from './Presentation';

function App() {
  return (
    <div className="App">
      
      <Entete/>
      <Presentation/>
      <Main/>
      <Footer/>
      <SidebarWave/>
      <SidebarWave/>
    </div>
  );
}

export default App;
