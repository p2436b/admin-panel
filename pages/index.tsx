import type { NextPage } from "next";
import Table from "../components/table";

const Home: NextPage = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex gap-2">
            <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
              NavItem
            </li>
            <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
              NavItem
            </li>
            <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
              NavItem
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <div className="flex">
        <aside className="border">
          <nav>
            <ul>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                NavItem
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                NavItem
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                NavItem
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                NavItem
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                NavItem
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                NavItem
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                NavItem
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                NavItem
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                NavItem
              </li>
              <li className="px-4 py-2 hover:bg-slate-200 cursor-pointer">
                NavItem
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
