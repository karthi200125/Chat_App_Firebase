import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className="logo">      
      <span>Chat Plus</span>  
      </div>      
      <div className="user">
        <div className="userinfo">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        </div>        
        <button onClick={()=>signOut(auth)}>logout</button>
        {/* <FiMoreHorizontal className="icon"size={20}/> */}

      </div>
    </div>
  )
}

export default Navbar