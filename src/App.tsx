import { useState } from 'react';
import Button from './components/Button';
import { MessageContext } from './context/messageContext';

function App() {
  const [message, setMessage] = useState('');

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      <main className='app'>
        <Button />
        <div id='message-box' className={message ? 'active' : ''}>
          <h2>Response</h2>
          <pre>{message}</pre>
        </div>
      </main>
    </MessageContext.Provider>
  );
}

export default App;
