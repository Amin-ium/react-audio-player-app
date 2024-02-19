import './App.css';
import Card from './components/Card';
import { useState } from 'react';
import List from './components/List';

function App() {

  const [musicNumber, setMusicNumber] = useState(0)
  const [open, setOpen] = useState(false)
  return (
    <div className="App bg-gray-800 h-[100vh]">
      <main className='w-[30%] mx-auto pt-5 relative '>
        <Card musicNumber={musicNumber} setMusicNumber={setMusicNumber} open={open} setOpen={setOpen} />
        <List musicNumber={musicNumber} setMusicNumber={setMusicNumber} open={open} setOpen={setOpen} />
      </main>
    </div>
  );
}

export default App;
