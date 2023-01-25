import './App.scss';
import { useState } from 'react';
import Header from './Components/Header';
import SearchUI from './Components/SearchUI';

// npm start --prefix client
function App() {
  const [loginState, setLoginState] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} loginState={loginState} setLoginState={setLoginState} />
      <SearchUI loginState={loginState} currentUser={currentUser} />
    </div>
  );
}

// searchui will only need to know if user is logged in (to make comments, bookmark) and who user is, if logged in

export default App;
