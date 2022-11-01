import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation/Navigation';

function App() {

  return (
    <div className="App">
      <Navigation></Navigation>
      <Hero></Hero>
      <About></About>
    </div>
  );
}

export default App;
