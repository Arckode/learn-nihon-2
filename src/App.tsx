
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from "react-router-dom";
import Sidebar from './component/Sidebar';

function App() {

  return (
    <>
      <section className="flex gap-6 dark:text-gray-100 dark:bg-slate-900 duration-300">
        <Sidebar />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <Outlet />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </section>
    </>
  )
}

export default App
