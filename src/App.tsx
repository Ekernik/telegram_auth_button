import { useState } from 'react';
import Button from './components/Button';
import MessageBox from './components/MessageBox';
import UserCard from './components/UserCard';
import { MessageContext } from './context/messageContext';

function App() {
  const [message, setMessage] = useState('');

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      <main className="app">
        {message ? <UserCard /> : <Button />}
        <MessageBox />
      </main>
    </MessageContext.Provider>
  );
}

export default App;
