import React, { useEffect, useState } from 'react';
import Logout from 'components/Logout';
import Login from './components/Login';
import { useCustomSelector } from 'hooks/redux';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { localStorage } = useCustomSelector((state) => state);

  useEffect(() => {
    if (localStorage.loggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [localStorage.loggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <Logout setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login setIsLogedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
