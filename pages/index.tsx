import type { NextPage } from "next";
import Table from "../components/table";

const Home: NextPage = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex gap-2">
            <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
              File
            </li>
            <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
              View
            </li>
            <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
              Help
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <div className="flex">
        <aside className="border">
          <nav>
            <ul>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer ">
                Projeler
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                Binalar
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                Bina Güncelleme(Excel)
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                Firmalar
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                Parsel
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                Arsalar
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                Arsa Imar Durumu
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                Kataloglar
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                E-Projeler
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                E-Binalar
              </li>
            </ul>
          </nav>
        </aside>
        <main className="border grow p-4">
          <Table />
        </main>
      </div>
    </>
  );
};

export default Home;
