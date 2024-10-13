import React from 'react';

const CardComponent = () => {
  return (
    <section className="flex items-center justify-center bg-light min-h-screen">
      <div className="container flex flex-col justify-center items-center px-4">
        <h2 className="text-black text-center display-1 lh-1 mb-8">
          Não espere mais, comece a construir sua independência financeira agora.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          <div className="w-full max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-cover bg-center h-56"
                 style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_59U8A5XnNi7_chyQBhjCu3DjKmzOMd8s_A&usqp=CAU')` }}>
            </div>
            <div className="p-4">
              <h1 className="text-xl font-bold">Metas</h1>
              <p className="text-gray-700 mt-2">Clique no botão abaixo e crie metas financeiras.</p>
              <a href="/login" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg">METAS</a>
            </div>
          </div>

          <div className="w-full max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-cover bg-center h-56"
                 style={{ backgroundImage: `url('https://dindimpordindim.com.br/wp-content/uploads/2018/11/shutterstock_1126057424-1.jpg')` }}>
            </div>
            <div className="p-4">
              <h1 className="text-xl font-bold">Investimento</h1>
              <p className="text-gray-700 mt-2">Comece a fazer simulações de investimentos.</p>
              <a href="/login" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg">Investimento</a>
            </div>
          </div>

          <div className="w-full max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-cover bg-center h-56"
                 style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRxry7vggTjCCnpwIyQmJ2c5ZiBvC7E6MfBQ&usqp=CAU')` }}>
            </div>
            <div className="p-4">
              <h1 className="text-xl font-bold">Relatórios</h1>
              <p className="text-gray-700 mt-2">Comece a registrar suas despesas agora e tenha controle total sobre suas finanças.</p>
              <a href="/login" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg">Relatórios</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
