import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout"
import Home from './pages/Home';
import Table from './pages/Table';
import Login from './pages/Login';
import Nopage from './pages/Nopage';


const Apps = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='table' element={<Table />} />
            <Route path='*' element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};

ReactDOM.render(<Apps />, document.querySelector("#root"));

