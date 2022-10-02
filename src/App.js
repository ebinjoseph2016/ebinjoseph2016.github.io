import React from "react";
import { BrowserRouter, } from "react-router-dom";
import Layout from "./components/layout/Layout";
import './App.scss'

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}
