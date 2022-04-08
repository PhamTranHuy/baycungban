import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace={true} />} />
        <Route path="home" element={<Home />} />
        <Route path="flight-schedule" element={<></>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
