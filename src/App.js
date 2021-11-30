import {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './Components/Profile';

function App() {

  const [user, setUser] = useState({
    name :"Name: Thouraya",
   profession :"profession: Ingenieure ",
   bio :"bio :Music",
 
  });
  const[show,setShow] = useState(true);
  

  return (
    <div className="btn">
       <Profile user={user} />
    <Button onClick={()=>setShow()}>Profile</Button>
    </div>
  );
}

export default App;