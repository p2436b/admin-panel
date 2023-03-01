import type { NextPage } from 'next';
import { useState } from 'react';
import Buildings from '../components/buildings/buildings';
import Projects from '../components/projects/projects';
import UpdateBuildings from '../components/update-buildings/update-buildings';

const menuItems = [
  { id: 1, text: 'Projeler', content: <Projects /> },
  { id: 2, text: 'Binalar', content: <Buildings /> },
  { id: 3, text: 'Bina Güncelleme(Excel)', content: <UpdateBuildings /> },
  { id: 4, text: 'Firmalar', content: '4' },
  { id: 5, text: 'Parsel', content: '5' },
  { id: 6, text: 'Arsalar', content: '6' },
  { id: 7, text: 'Arsa Imar Durumu', content: '7' },
  { id: 8, text: 'Kataloglar', content: '8' },
  { id: 9, text: 'E-Projeler', content: '9' },
  { id: 10, text: 'E-Binalar', content: '10' },
];

const Home: NextPage = () => {
  const [selectedMenuItemId, setSelectedMenuItemId] = useState(1);

  const handleMenuItemClick = (itemId: number) => setSelectedMenuItemId(itemId);

  return (
    <>
      <header>
        <nav>
          <ul className='flex gap-2'>
            <li className='px-4 py-2 hover:bg-slate-200 cursor-pointer'>
              File
            </li>
            <li className='px-4 py-2 hover:bg-slate-200 cursor-pointer'>
              View
            </li>
            <li className='px-4 py-2 hover:bg-slate-200 cursor-pointer'>
              Help
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <div className='flex'>
        <aside className='border'>
          <nav>
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`px-4 py-2 cursor-pointer ${
                    item.id === selectedMenuItemId
                      ? 'bg-blue-900 text-white'
                      : 'bg-transparent hover:bg-slate-100'
                  }`}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className='border grow'>
          {menuItems.find((item) => item.id === selectedMenuItemId)?.content}
        </main>
      </div>
    </>
  );
};

export default Home;
