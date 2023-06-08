// import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Auth/Register";
import Guard from "./components/Guard";
import Frequent from "./pages/Frequent";
import CreateContent from "./pages/CreateContact";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Guard>
              <Dashboard />
            </Guard>
          }
        />
        <Route
          path="/contact"
          element={
            <Guard>
              <Dashboard />
            </Guard>
          }
        />
        <Route
          path="/frequent"
          element={
            <Guard>
              <Frequent />
            </Guard>
          }
        />
        <Route
          path="/create"
          element={
            <Guard>
              <CreateContent />
            </Guard>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <Guard>
              <Edit />
            </Guard>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Guard>
              <Detail />
            </Guard>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
