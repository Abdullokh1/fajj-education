import React from "react";
import { Route, Routes } from "react-router-dom";
import AddGroup from "../AddGroup/AddGroup";
import AddStudent from "../AddStudent/AddStudent";
import AddTeacher from "../AddTeacher/AddTeacher";
import EditGroup from "../EditGroup/EditGroup";
import EditStudent from "../EditStudent/EditStudent";
import EditTeacher from "../EditTeacher/EditTeacher";
import Groups from "../Groups/Groups";
import Statistics from "../Statistics/Statistics";
import Students from "../Students/Students";
import Teachers from "../Teachers/Teachers";
import Header from "./Header/Header";
import "./Home.scss";
import Navbar from "./Navbar/Navbar";

function Home() {
  return (
    <>
      <div className="d-flex position-relative">
        <Navbar />
        <div className="main-part">
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Statistics />} />
              <Route path="/Students" element={<Students />} />
              <Route path="/Teachers" element={<Teachers />} />
              <Route path="/Groups" element={<Groups />} />
              <Route path="/AddStudent" element={<AddStudent />} />
              <Route path="/AddTeacher" element={<AddTeacher />} />
              <Route path="/AddGroup" element={<AddGroup />} />
              <Route path="/EditStudent/:id" element={<EditStudent />} />
              <Route path="/EditTeacher/:id" element={<EditTeacher />} />
              <Route path="/EditGroup/:id" element={<EditGroup />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
