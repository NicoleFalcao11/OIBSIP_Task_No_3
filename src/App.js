
import './App.css';
import './NavBar.css';
import NavBar from './Components/NavBar'
import AddTaske from './Components/AddTaske';
import AddTask from './Components/AddTask';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import MyTasks from './Components/MyTasks';

import Footer from './Components/Footer';
import GetPend from './Components/GetPend';
import GetComplete from './Components/GetComplete';
import Stack from 'react-bootstrap/Stack';

function App() {
  return (
    <div>
      <Router>
      <Stack gap={3}>
      <NavBar />
    
             <Routes>
               <Route path="/" element={<AddTask />} />
               <Route path="/EditTask/:tasktd" element={<AddTaske/>} />
               <Route path="/mytasks" element={<MyTasks />} />
               <Route path="/pending" element={<GetPend />} />
               <Route path="/complete" element={<GetComplete />} />
               <Route path="/mytasks:tasktd/" element={<MyTasks />} />
             </Routes>
        
  

    <Footer />
    </Stack>
    </Router>
    </div>
  );
}

export default App;


