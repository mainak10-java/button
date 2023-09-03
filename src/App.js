import Navbar from './component/Navbar';
import Hero from './component/Hero';


import './App.css';



function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
        <div>
          <Navbar/>
        </div>

        <div>
          <Hero/>
        </div>
    </div>
  );
}

export default App;
