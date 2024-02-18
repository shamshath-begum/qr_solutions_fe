import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Signup from './pages/Signup';
import Login from "./pages/Login";
import Home from "./components/Home";
import StudentInfo from "./components/StudentRegistration";
import Dashboard from "./components/Dashboard";
import StudentRegistration from "./components/StudentRegistration";
import DisplayStudent from "./components/DisplayStudent";
import ManageStudent from "./components/ManageStudent";
import StudentDashboard from "./components/StudentDashboard";
import CourseRegistration from "./components/CourseRegistration";
import DisplayCourse from "./components/DisplayCourse";
import ManageCourse from "./components/ManageCourse";
import ManageTiming from "./components/ManageTiming";
import TrainingRegistration from "./components/TrainingRegistration";
import TrainingDashboard from "./components/TrainingDashboard";
import DisplayTiming from "./components/DisplayTiming";
export const url="http://localhost:8000"
// export const url="https://qr-solutions-be.onrender.com/"

function App() {
  return <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/signup"element={<Signup/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/student-registration" element={<StudentRegistration/>}/>
      <Route path="/course-registration" element={<CourseRegistration/>}/>
      <Route path="/training-registration" element={<TrainingRegistration/>}/>
      <Route path="/dashboard"element={<Dashboard/>}/>
      <Route path="/display-student"element={<DisplayStudent/>}/>
      <Route path="/display-course"element={<DisplayCourse/>}/>
      <Route path="/display-timing"element={<DisplayTiming/>}/>
      <Route path="/manage-student"element={<ManageStudent/>}/>
      <Route path="/manage-student/:id"element={<ManageStudent/>}/>
      <Route path="/manage-course/:id"element={<ManageCourse/>}/>
      <Route path="/manage-timing/:id"element={<ManageTiming/>}/>
      <Route path="/student-dashboard"element={<StudentDashboard/>}/>
      {/* <Route path="/training-dashboard"element={<TrainingDashboard/>}/> */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
    </BrowserRouter>
    </div>
  
}

export default App;
