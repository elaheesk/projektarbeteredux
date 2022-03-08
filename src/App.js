import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
export default function App() {
  const [deactivatedCardsArray, setDeactivatedCardsArray] = React.useState([]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              deactivatedCardsArray={deactivatedCardsArray}
              setDeactivatedCardsArray={setDeactivatedCardsArray}
            />
          }
        />
        <Route
          path="addcard"
          element={
            <AddCard
              deactivatedCardsArray={deactivatedCardsArray}
              setDeactivatedCardsArray={setDeactivatedCardsArray}
            />
          }
        />
      </Routes>
    </div>
  );
}
