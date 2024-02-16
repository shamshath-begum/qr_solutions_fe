import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import "./header.css"

function Header() {
    let [menuopen,setMenuOpen]=useState(false)
    const user=useSelector((state)=>state.user.user)
    console.log(user)

    let navigate=useNavigate()

    let handleLogout=()=>{
        sessionStorage.clear();
        navigate("/login");
    }
  return <>
  <nav>
    <h1 className='title'>Learning App</h1>
    <div className='menu' onClick={()=>setMenuOpen(!menuopen)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    {user ? (<button onClick={handleLogout}style={{borderRadius:7}} >LogOut</button>) :  (
        <>
        <ul className={menuopen ? "open" :""}>
        <li><Link to="/login">Login</Link></li>
    </ul>
        </>
    )}
    
  </nav>
  

  </>
}

export default Header
