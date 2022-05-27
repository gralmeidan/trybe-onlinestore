import React from 'react';
import Categories from '../components/Categories';

class Main extends React.Component {
  render() {
    return (
      <div>
        <header className='bg-rose-600'>
          <h1 className='text-white text-2xl p-3 font-semibold'>TrybeStore</h1>
        </header>
        <div className='flex w-full m-2'>
          <Categories />
          <main className='grow-[2] border-2'>
            opa
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
