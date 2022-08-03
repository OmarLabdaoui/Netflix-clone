
import './App.css';
import HommeSecreen from './secreens/HommeSecreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Login from './secreens/Login';
import { login, logout, selectUser } from './features/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';
import Profile from './secreens/Profile';
import { selectPlan } from './features/currentPlan';
function App() {
  const user=useSelector(selectUser)
  const plan=useSelector(selectPlan)
  const dispatch=useDispatch()
  useEffect(()=>{
  const unsub=auth.onAuthStateChanged((user)=>{
    if(user){
      dispatch(login({
        uid:user.uid,
        email:user.email
      }))
    }else{
       dispatch(logout())
    }
  })
return unsub;
  },[])
  return (
    <div className="app">
      <Router>
      {!user? <Login/>
:



<Routes>
 

<Route path='/profile' element={<Profile/>}></Route>
<Route path='/' element={<HommeSecreen/>}></Route>
 <Route path='/login' element={<Login/>}></Route>

        </Routes>

      }       
     
      </Router>
    </div>
  );
}

export default App;
