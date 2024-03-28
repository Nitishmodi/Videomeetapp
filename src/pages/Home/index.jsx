
import React from 'react'
import { useState,useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import './homepage.css'
const HomePage = () => {
    const [value,setValue]=useState();
    const navigate=useNavigate();
    const handleJoinRoom=useCallback(()=>{
       navigate(`/room/${value}`)
    },[navigate,value]);
  return (
        <div className="home-container">
            <div className="content">
                <h1>Welcome to Our 1:1 Session Section</h1>
                <div className="input-container">
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        placeholder="Enter Room Code"
                        className="room-code-input"
                    />
                    <button onClick={handleJoinRoom}>Join</button>
                </div>
            </div>
        </div>
    );
};
export default HomePage
