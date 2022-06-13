import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import api from "./api";


function App() {
  const [paes, setPaes] = useState([]);
  const getPaes = async () => {
    const response = await api.get("/all-paes");
    setPaes(response.data);
  };

  useEffect(() => {
    getPaes();
  }, []);
  return (
    <div>
      <Toaster position="bottom-center"/>
      <Header getPaes={getPaes} />
      <Home category="Pães" paes={paes} getPaes={getPaes} />
      <Footer />
    </div>
  )
}

export default App;
