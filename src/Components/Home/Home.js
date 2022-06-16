import React from "react";
import { Route, Routes } from "react-router-dom";
import Statistics from "../Statistics/Statistics";
import Students from "../Students/Students";
import Header from "./Header/Header";
import "./Home.scss";
import Navbar from "./Navbar/Navbar";

function Home() {
  return (
    <>
      <div className="d-flex">
        <Navbar />
        <div>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Statistics />} />
              <Route path="/Students" element={<Students />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
