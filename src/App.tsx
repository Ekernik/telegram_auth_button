import { useState } from 'react';
import Button from './components/Button';
import MessageBox from './components/MessageBox';
import { MessageContext } from './context/messageContext';

function App() {
  const [message, setMessage] = useState('');

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      <main className='app'>
        <Button />
        <MessageBox message={message}/>
      </main>
    </MessageContext.Provider>
  );
}

export default App;
