import FormAtualizar from '@/components/formatualize';
import Login from './login';
import Petform from './Petlist';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className='flex-grow'>
      <Login/>
    </main>
    </div>
  );
}
