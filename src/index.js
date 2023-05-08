import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout"
// import Home from './pages/Home';
import App from './pages/App';
import Table from './pages/Table';
import Login from './pages/Login';
import Nopage from './pages/Nopage';
import Test from './pages/Test';

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<App />} />
            <Route path='login' element={<Login />} />
            <Route path='table' element={<Table />} />
            <Route path='test' element={<Test />} />
            <Route path='*' element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));

