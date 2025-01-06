import {Button} from "./components/ui/button";
import {Route,Routes} from "react-router-dom";
// import AuthPage from "./pages/auth";
import AdminDashboardPage from "./pages/instructor";
import AddNewCoursePage from "./pages/instructor/add-new-course";
function App() {
  

  return (
    <Routes>
      <Route path="/instructor" element={<AdminDashboardPage/>}/>
      <Route path="/instructor/create-new-course" element={<AddNewCoursePage/>}/>
    </Routes>
   
  )
}

export default App
