import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import {
  boolRef,
  boolRef2,
  boolRef3,
  boolRef4,
  boolRef5,
  boolRef6,
} from "./mybase";
import { onValue } from "firebase/database";
import Header from "./Header";
import Main from "./Main";
import First from "./parking/First";
import Map from "./Map";

export default function Router() {
  const [divide, setDivide] = useState(true);
  const [turn, setTurn] = useState(true);
  const [range, setRange] = useState("100");

  const [bool, setBool] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [bool3, setBool3] = useState(false);
  const [bool4, setBool4] = useState(false);
  const [bool5, setBool5] = useState(false);
  const [bool6, setBool6] = useState(false);
  const [parkedNum, setParkedNum] = useState(0);

  const numFunc = () => {
    onValue(boolRef, (snapshot) => {
      snapshot.val();
      setBool(snapshot.val());
    });

    onValue(boolRef2, (snapshot) => {
      snapshot.val();
      setBool2(snapshot.val());
    });

    onValue(boolRef3, (snapshot) => {
      snapshot.val();
      setBool3(snapshot.val());
    });

    onValue(boolRef4, (snapshot) => {
      snapshot.val();
      setBool4(snapshot.val());
    });

    onValue(boolRef5, (snapshot) => {
      snapshot.val();
      setBool5(snapshot.val());
    });

    onValue(boolRef6, (snapshot) => {
      snapshot.val();
      setBool6(snapshot.val());
    });

    setParkedNum(bool + bool2 + bool3 + bool4 + bool5 + bool6);
  };

  return (
    <BrowserRouter>
      <Header
        divide={divide}
        turn={turn}
        setTurn={setTurn}
        setRange={setRange}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              divide={divide}
              setDivide={setDivide}
              turn={turn}
              range={range}
              numFunc={numFunc}
              parkedNum={parkedNum}
              bool={bool}
              bool2={bool2}
              bool3={bool3}
              bool4={bool4}
              bool5={bool5}
            />
          }
        />
        <Route
          path="/parking"
          element={
            <First
              divide={divide}
              setDivide={setDivide}
              parkedNum={parkedNum}
              setParkedNum={setParkedNum}
              numFunc={numFunc}
              bool={bool}
              bool2={bool2}
              bool3={bool3}
              bool4={bool4}
              bool5={bool5}
            />
          }
        />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}
