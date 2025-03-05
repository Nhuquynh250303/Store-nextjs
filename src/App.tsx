import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Toaster } from 'sonner'; 
import UserProfile from './components/user/UserProfile';
import SearchForm from '@/components/form/SearchForm';

const App = () => {
  const [userName, setUserName] = useState('quincylarson');

  return (
    <main className='mx-auto max-w-6xl px-8 py-20'>
      <Toaster richColors position="top-right" /> 
      <SearchForm userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName} />
    </main>
  );
};

export default App;
