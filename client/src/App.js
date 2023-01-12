import './App.scss';
import Header from './Components/Header';
import SearchUI from './Components/SearchUI';

// npm start --prefix client
function App() {
  return (
    <div className="App">
      <Header />
      <SearchUI />
    </div>
  );
}

export default App;
