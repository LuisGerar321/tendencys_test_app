import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { socket } from "./sockets";

import MyAppBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/mainLayout";
import { Counter } from "./components/Counter";

function App() {
  React.useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Counter></Counter>
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
