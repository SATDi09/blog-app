import ProfilePage from "./pages/profile.page";
import SigninPage from "./pages/signin.page";
import SignupPage from "./pages/signup.page";
import CreateTaskPage from "./pages/task.create.page";
import TaskDetailsPage from "./pages/task_details.page";
import TaskListPage from "./pages/task_list.page";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="container">

      <BrowserRouter>
      {/*<h1 className='header'>Task Manager</h1>*/}
      <Routes>
        <Route path="/" element={<SigninPage/>}/>
         <Route path="signup" element={<SignupPage />}/>
         <Route path="signin" element={<SigninPage/>}/>
         <Route path="task-create" element={<CreateTaskPage/>}/>
         <Route path="task-list" element={<TaskListPage/>}/>
         <Route path="task-details" element={<TaskDetailsPage/>}/>
         <Route path="profile" element={<ProfilePage/>}/>
       </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App;
