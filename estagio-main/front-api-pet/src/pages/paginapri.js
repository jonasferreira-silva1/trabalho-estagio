import CardComponent from '@/components/Cards';
import NavbarFuncao from '@/components/Navbar';

export default function PaginaPri() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className='flex-grow'>
        <nav>
            <NavbarFuncao/>
        </nav>
        <br/>
        <div>
          <CardComponent/>
        </div>
      </main>
      <br/>
    </div>
  );
}
