import './App.css';
import Header from './components/Header/header';
import Albums from './components/Albums/Albums';
import Videos from './components/Videos/Videos';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Albums />
      {/* <Videos /> */}
      <Footer />
    </div>
  );
}

export default App;
