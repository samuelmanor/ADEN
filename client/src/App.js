import './App.scss';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import SearchUI from './Components/SearchUI';

// npm start --prefix client
function App() {
  const [loginState, setLoginState] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/me/').then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user))
      }
    });
  }, []);

  return (
    <div className="App">
      <Header setCurrentUser={setCurrentUser} loginState={loginState} setLoginState={setLoginState} />
      <SearchUI loginState={loginState} currentUser={currentUser} />
    </div>
  );
}

export default App;
