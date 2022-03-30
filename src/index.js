import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './components/App';
import Index from './components/Index/Index';
import Ocio from "./components/Ocio/Ocio";
import Gastronomia from "./components/Gastronomia/Gastronomia";
import Cultura from "./components/Cultura/Cultura";
import Transportes from "./components/Transportes/Transportes";
import Visita from './components/Visita/Visita';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} />
        <Route path="transportes" element={<Transportes />} />
        <Route path="ocio" element={<Ocio />} />
        <Route path="gastronomia" element={<Gastronomia />} />
        <Route path="cultura" element={<Cultura />} />
        <Route path="visita" element={<Visita />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);