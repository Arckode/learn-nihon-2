
import './App.css'
import { Routes, Route } from "react-router-dom";
import Sidebar from './component/Sidebar';
import Home from "./pages/Home"
import Hiragana from "./pages/Hiragana";

function App() {

  return (
    <>
      <section className="flex gap-6 dark:text-gray-100 dark:bg-slate-900 duration-300">
        <Sidebar />
        <div className="text-xl font-semibold w-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hiragana" element={<Hiragana />} />
            {/* <Route path="/katakana" element={<Katakana />} />
            <Route path="/hiraganaTest" element={<HiraganaTest />} />
            <Route path="/katakanaTest" element={<KatakanaTest />} /> */}
          </Routes>
        </div>
      </section>
    </>
  )
}

export default App
